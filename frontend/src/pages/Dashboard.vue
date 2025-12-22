<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      user: null,
      workouts: [],
      exercises: [],
      showForm: false,
      newWorkout: {
        exercise_id: '',
        weight: '',
        reps: '',
        sets: '',
        notes: ''
      }
    }
  },
  async created() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      await this.fetchWorkouts();
      await this.fetchExercises();
    }
  },
  methods: {
    async fetchWorkouts() {
      try {
        const response = await fetch(`http://localhost:3000/workouts/user/${this.user.user_id}`);
        this.workouts = await response.json();
      } catch (err) {
        console.error('Error fetching workouts:', err);
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
    async addWorkout() {
      try {
        const response = await fetch('http://localhost:3000/workouts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_id: this.user.user_id,
            exercise_id: this.newWorkout.exercise_id,
            weight: this.newWorkout.weight,
            reps: this.newWorkout.reps,
            sets: this.newWorkout.sets,
            notes: this.newWorkout.notes
          })
        });

        if (response.ok) {
          await this.fetchWorkouts();
          this.showForm = false;
          this.newWorkout = { exercise_id: '', weight: '', reps: '', sets: '', notes: '' };
        }
      } catch (err) {
        console.error('Error adding workout:', err);
      }
    },
    async deleteWorkout(id) {
      if (confirm('Are you sure you want to delete this workout?')) {
        try {
          await fetch(`http://localhost:3000/workouts/${id}`, {
            method: 'DELETE'
          });
          await this.fetchWorkouts();
        } catch (err) {
          console.error('Error deleting workout:', err);
        }
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
  }
}
</script>

<template>
  <div class="dashboard">
    <h1>Welcome, {{ user?.name }}!</h1>
    
    <button @click="showForm = !showForm" class="btn btn-primary">
      {{ showForm ? 'Cancel' : '+ Log Workout' }}
    </button>

    <!-- Add Workout Form -->
    <div v-if="showForm" class="workout-form">
      <h3>Log New Workout</h3>
      <form @submit.prevent="addWorkout">
        <div class="form-group">
          <label>Exercise:</label>
          <select v-model="newWorkout.exercise_id" required>
            <option value="">Select exercise</option>
            <option v-for="ex in exercises" :key="ex.exercise_id" :value="ex.exercise_id">
              {{ ex.name }}
            </option>
          </select>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Weight (kg):</label>
            <input type="number" v-model="newWorkout.weight" required />
          </div>
          <div class="form-group">
            <label>Reps:</label>
            <input type="number" v-model="newWorkout.reps" required />
          </div>
          <div class="form-group">
            <label>Sets:</label>
            <input type="number" v-model="newWorkout.sets" required />
          </div>
        </div>
        <div class="form-group">
          <label>Notes:</label>
          <textarea v-model="newWorkout.notes"></textarea>
        </div>
        <button type="submit" class="btn btn-success">Save Workout</button>
      </form>
    </div>

    <!-- Workouts List -->
    <div class="workouts-list">
      <h2>Your Workouts</h2>
      
      <div v-if="workouts.length === 0" class="no-workouts">
        No workouts logged yet. Start tracking your progress!
      </div>

      <div v-else class="workouts-grid">
        <div v-for="workout in workouts" :key="workout.workout_id" class="workout-card">
          <div class="workout-header">
            <h4>{{ workout.exercise?.name }}</h4>
            <span class="workout-date">{{ formatDate(workout.date) }}</span>
          </div>
          <div class="workout-stats">
            <span>🏋️ {{ workout.weight }} kg</span>
            <span>🔄 {{ workout.reps }} reps</span>
            <span>📊 {{ workout.sets }} sets</span>
          </div>
          <p v-if="workout.notes" class="workout-notes">{{ workout.notes }}</p>
          <button @click="deleteWorkout(workout.workout_id)" class="btn-delete">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard h1 {
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

.workout-form {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.workout-form h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.workouts-list h2 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.no-workouts {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.workouts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.workout-card {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.workout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.workout-header h4 {
  color: #2c3e50;
}

.workout-date {
  color: #999;
  font-size: 0.85rem;
}

.workout-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.workout-notes {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.btn-delete {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.85rem;
}
</style>