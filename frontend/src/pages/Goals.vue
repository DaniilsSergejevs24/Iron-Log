<script>
export default {
  name: 'Goals',
  data() {
    return {
      user: null,
      goals: [],
      exercises: [],
      showForm: false,
      newGoal: {
        exercise_id: '',
        target_weight: '',
        target_reps: ''
      }
    }
  },
  async created() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      await this.fetchGoals();
      await this.fetchExercises();
    }
  },
  methods: {
    async fetchGoals() {
      try {
        const response = await fetch(`http://localhost:3000/goals/user/${this.user.user_id}`);
        this.goals = await response.json();
      } catch (err) {
        console.error('Error fetching goals:', err);
      }
    },
    async fetchExercises() {
      try {
        const response = await fetch('http://localhost:3000/exercises');
        this.exercises = await response.json();
      } catch (err) {
        console.error('Error fetching exercises:', err);
      }
    },
    async addGoal() {
      try {
        const response = await fetch('http://localhost:3000/goals', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: this.user.user_id,
            exercise_id: this.newGoal.exercise_id,
            target_weight: this.newGoal.target_weight,
            target_reps: this.newGoal.target_reps
          })
        });

        if (response.ok) {
          await this.fetchGoals();
          this.showForm = false;
          this.newGoal = { exercise_id: '', target_weight: '', target_reps: '' };
        }
      } catch (err) {
        console.error('Error adding goal:', err);
      }
    },
    async toggleAchieved(goal) {
      try {
        await fetch(`http://localhost:3000/goals/${goal.goal_id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            target_weight: goal.target_weight,
            target_reps: goal.target_reps,
            achieved: !goal.achieved
          })
        });
        await this.fetchGoals();
      } catch (err) {
        console.error('Error updating goal:', err);
      }
    },
    async deleteGoal(id) {
      if (confirm('Delete this goal?')) {
        try {
          await fetch(`http://localhost:3000/goals/${id}`, { method: 'DELETE' });
          await this.fetchGoals();
        } catch (err) {
          console.error('Error deleting goal:', err);
        }
      }
    }
  }
}
</script>

<template>
  <div class="goals-page">
    <h1>🎯 My Goals</h1>
    
    <button @click="showForm = !showForm" class="btn btn-primary">
      {{ showForm ? 'Cancel' : '+ Add Goal' }}
    </button>

    <!-- Add Goal Form -->
    <div v-if="showForm" class="goal-form">
      <h3>Set New Goal</h3>
      <form @submit.prevent="addGoal">
        <div class="form-group">
          <label>Exercise:</label>
          <select v-model="newGoal.exercise_id" required>
            <option value="">Select exercise</option>
            <option v-for="ex in exercises" :key="ex.exercise_id" :value="ex.exercise_id">
              {{ ex.name }}
            </option>
          </select>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Target Weight (kg):</label>
            <input type="number" v-model="newGoal.target_weight" />
          </div>
          <div class="form-group">
            <label>Target Reps:</label>
            <input type="number" v-model="newGoal.target_reps" />
          </div>
        </div>
        <button type="submit" class="btn btn-success">Save Goal</button>
      </form>
    </div>

    <!-- Goals List -->
    <div class="goals-list">
      <div v-if="goals.length === 0" class="no-goals">
        No goals set yet. Start by adding a goal!
      </div>

      <div v-else class="goals-grid">
        <div v-for="goal in goals" :key="goal.goal_id" 
             class="goal-card" :class="{ achieved: goal.achieved }">
          <h4>{{ goal.exercise?.name }}</h4>
          <div class="goal-targets">
            <span v-if="goal.target_weight">🏋️ {{ goal.target_weight }} kg</span>
            <span v-if="goal.target_reps">🔄 {{ goal.target_reps }} reps</span>
          </div>
          <div class="goal-actions">
            <button @click="toggleAchieved(goal)" class="btn-achieve">
              {{ goal.achieved ? '✅ Achieved!' : 'Mark Complete' }}
            </button>
            <button @click="deleteGoal(goal.goal_id)" class="btn-delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.goals-page h1 {
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-success {
  background-color: #27ae60;
  color: white;
}

.goal-form {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.no-goals {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.goals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.goal-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
}

.goal-card.achieved {
  border-left-color: #27ae60;
  background-color: #f0fff4;
}

.goal-card h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.goal-targets {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.goal-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-achieve {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.btn-delete {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>