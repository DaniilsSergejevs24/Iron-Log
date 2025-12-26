<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      user: null,
      workouts: [],
      exercises: [],
      activeWorkout: null,
      showNewWorkout: false,
      newWorkoutName: '',
      selectedExercise: '',
      showCalendar: false
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
    async startNewWorkout() {
      try {
        const response = await fetch('http://localhost:3000/workouts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: this.user.user_id,
            name: this.newWorkoutName || 'Workout'
          })
        });
        const data = await response.json();
        this.activeWorkout = {
          ...data.workout,
          workout_exercises: []
        };
        this.showNewWorkout = false;
        this.newWorkoutName = '';
        await this.fetchWorkouts();
      } catch (err) {
        console.error('Error creating workout:', err);
      }
    },
    async addExerciseToWorkout() {
      if (!this.selectedExercise || !this.activeWorkout) return;
      
      try {
        const response = await fetch(`http://localhost:3000/workouts/${this.activeWorkout.workout_id}/exercises`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            exercise_id: this.selectedExercise
          })
        });
        const data = await response.json();
        
        // Add to active workout with empty sets
        this.activeWorkout.workout_exercises.push({
          ...data.workout_exercise,
          sets: []
        });
        
        this.selectedExercise = '';
      } catch (err) {
        console.error('Error adding exercise:', err);
      }
    },
    async addSet(workoutExercise) {
      try {
        // Get last set values as default
        const lastSet = workoutExercise.sets[workoutExercise.sets.length - 1];
        const weight = lastSet ? lastSet.weight : 0;
        const reps = lastSet ? lastSet.reps : 0;

        const response = await fetch(`http://localhost:3000/workouts/exercises/${workoutExercise.workout_exercise_id}/sets`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ weight, reps })
        });
        const data = await response.json();
        workoutExercise.sets.push(data.set);
      } catch (err) {
        console.error('Error adding set:', err);
      }
    },
    async updateSet(set) {
      try {
        await fetch(`http://localhost:3000/workouts/sets/${set.set_id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            weight: set.weight,
            reps: set.reps
          })
        });
      } catch (err) {
        console.error('Error updating set:', err);
      }
    },
    async deleteSet(workoutExercise, setIndex) {
      const set = workoutExercise.sets[setIndex];
      try {
        await fetch(`http://localhost:3000/workouts/sets/${set.set_id}`, {
          method: 'DELETE'
        });
        workoutExercise.sets.splice(setIndex, 1);
        // Renumber sets
        workoutExercise.sets.forEach((s, i) => s.set_number = i + 1);
      } catch (err) {
        console.error('Error deleting set:', err);
      }
    },
    async removeExercise(index) {
      const workoutExercise = this.activeWorkout.workout_exercises[index];
      try {
        await fetch(`http://localhost:3000/workouts/exercises/${workoutExercise.workout_exercise_id}`, {
          method: 'DELETE'
        });
        this.activeWorkout.workout_exercises.splice(index, 1);
      } catch (err) {
        console.error('Error removing exercise:', err);
      }
    },
    async finishWorkout() {
      this.activeWorkout = null;
      await this.fetchWorkouts();
    },
    loadWorkout(workout) {
      this.activeWorkout = workout;
    },
    async deleteWorkout(workoutId) {
      if (!confirm('Delete this workout?')) return;
      try {
        await fetch(`http://localhost:3000/workouts/${workoutId}`, {
          method: 'DELETE'
        });
        await this.fetchWorkouts();
        if (this.activeWorkout?.workout_id === workoutId) {
          this.activeWorkout = null;
        }
      } catch (err) {
        console.error('Error deleting workout:', err);
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
    },
    getTotalVolume(workout) {
      let total = 0;
      workout.workout_exercises?.forEach(we => {
        we.sets?.forEach(set => {
          total += set.weight * set.reps;
        });
      });
      return total;
    }
  }
}
</script>

<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h1>Welcome, {{ user?.name }}! 💪</h1>
      <div class="header-actions">
        <button @click="showCalendar = !showCalendar" class="btn btn-secondary">
          📅 {{ showCalendar ? 'Hide' : 'Show' }} History
        </button>
        <button @click="showNewWorkout = true" class="btn btn-primary" v-if="!activeWorkout">
          + Start Workout
        </button>
      </div>
    </div>

    <!-- New Workout Modal -->
    <div v-if="showNewWorkout" class="modal-overlay" @click.self="showNewWorkout = false">
      <div class="modal">
        <h3>Start New Workout</h3>
        <input 
          type="text" 
          v-model="newWorkoutName" 
          placeholder="Workout name (e.g., Push Day)"
          @keyup.enter="startNewWorkout"
        />
        <div class="modal-actions">
          <button @click="showNewWorkout = false" class="btn btn-secondary">Cancel</button>
          <button @click="startNewWorkout" class="btn btn-primary">Start</button>
        </div>
      </div>
    </div>

    <div class="dashboard-content">
      <!-- Active Workout Panel -->
      <div class="active-workout" v-if="activeWorkout">
        <div class="workout-header">
          <div>
            <h2>{{ activeWorkout.name || 'Workout' }}</h2>
            <span class="workout-date">{{ formatDate(activeWorkout.date) }}</span>
          </div>
          <button @click="finishWorkout" class="btn btn-success">✓ Finish Workout</button>
        </div>

        <!-- Add Exercise -->
        <div class="add-exercise">
          <select v-model="selectedExercise">
            <option value="">Select exercise to add...</option>
            <option v-for="ex in exercises" :key="ex.exercise_id" :value="ex.exercise_id">
              {{ ex.name }} ({{ ex.muscle_group }})
            </option>
          </select>
          <button @click="addExerciseToWorkout" class="btn btn-primary" :disabled="!selectedExercise">
            + Add Exercise
          </button>
        </div>

        <!-- Exercises List -->
        <div class="exercises-list">
          <div v-if="activeWorkout.workout_exercises.length === 0" class="empty-state">
            No exercises added yet. Select an exercise above to start!
          </div>

          <div v-for="(we, exIndex) in activeWorkout.workout_exercises" :key="we.workout_exercise_id" class="exercise-card">
            <div class="exercise-header">
              <h3>{{ we.exercise.name }}</h3>
              <button @click="removeExercise(exIndex)" class="btn-icon">🗑️</button>
            </div>
            
            <!-- Sets Table -->
            <table class="sets-table">
              <thead>
                <tr>
                  <th>Set</th>
                  <th>Weight (kg)</th>
                  <th>Reps</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(set, setIndex) in we.sets" :key="set.set_id">
                  <td class="set-number">{{ set.set_number }}</td>
                  <td>
                    <input 
                      type="number" 
                      v-model.number="set.weight" 
                      @change="updateSet(set)"
                      class="set-input"
                    />
                  </td>
                  <td>
                    <input 
                      type="number" 
                      v-model.number="set.reps" 
                      @change="updateSet(set)"
                      class="set-input"
                    />
                  </td>
                  <td>
                    <button @click="deleteSet(we, setIndex)" class="btn-icon small">✕</button>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <button @click="addSet(we)" class="btn btn-add-set">+ Add Set</button>
          </div>
        </div>
      </div>

      <!-- No Active Workout -->
      <div v-else class="no-workout">
        <div class="empty-state-large">
          <span class="emoji">🏋️</span>
          <h2>No Active Workout</h2>
          <p>Start a new workout to begin tracking your exercises</p>
          <button @click="showNewWorkout = true" class="btn btn-primary btn-large">
            + Start Workout
          </button>
        </div>
      </div>

      <!-- Workout History / Calendar -->
      <div class="workout-history" v-if="showCalendar">
        <h2>📅 Workout History</h2>
        <div v-if="workouts.length === 0" class="empty-state">
          No workouts yet. Start your first workout!
        </div>
        <div class="history-list">
          <div v-for="workout in workouts" :key="workout.workout_id" class="history-card">
            <div class="history-info">
              <h4>{{ workout.name || 'Workout' }}</h4>
              <span class="history-date">{{ formatDate(workout.date) }}</span>
              <div class="history-exercises">
                <span v-for="we in workout.workout_exercises" :key="we.workout_exercise_id" class="exercise-tag">
                  {{ we.exercise.name }}
                </span>
              </div>
              <div class="history-stats">
                <span>📊 Volume: {{ getTotalVolume(workout) }} kg</span>
              </div>
            </div>
            <div class="history-actions">
              <button @click="loadWorkout(workout)" class="btn btn-secondary btn-small">
                View/Edit
              </button>
              <button @click="deleteWorkout(workout.workout_id)" class="btn btn-danger btn-small">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 900px;
  margin: 0 auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.dashboard-header h1 {
  color: #2c3e50;
}

.header-actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn-secondary {
  background-color: #95a5a6;
  color: white;
}

.btn-success {
  background-color: #27ae60;
  color: white;
}

.btn-danger {
  background-color: #e74c3c;
  color: white;
}

.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
}

.modal h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.modal input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.modal-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

/* Active Workout */
.active-workout {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.workout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
}

.workout-header h2 {
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.workout-date {
  color: #999;
  font-size: 0.9rem;
}

/* Add Exercise */
.add-exercise {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.add-exercise select {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

/* Exercise Card */
.exercise-card {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.exercise-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.exercise-header h3 {
  color: #2c3e50;
  font-size: 1.1rem;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.25rem;
}

.btn-icon.small {
  font-size: 0.9rem;
  color: #e74c3c;
}

/* Sets Table */
.sets-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 0.75rem;
}

.sets-table th {
  text-align: left;
  padding: 0.5rem;
  color: #666;
  font-size: 0.85rem;
  font-weight: 500;
}

.sets-table td {
  padding: 0.5rem;
}

.set-number {
  font-weight: bold;
  color: #3498db;
  width: 50px;
}

.set-input {
  width: 80px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  text-align: center;
}

.set-input:focus {
  border-color: #3498db;
  outline: none;
}

.btn-add-set {
  width: 100%;
  padding: 0.5rem;
  background: #e8f4fc;
  color: #3498db;
  border: 2px dashed #3498db;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
}

.btn-add-set:hover {
  background: #d4ebf9;
}

/* Empty States */
.empty-state {
  text-align: center;
  padding: 2rem;
  color: #999;
}

.empty-state-large {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.empty-state-large .emoji {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.empty-state-large h2 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.empty-state-large p {
  color: #999;
  margin-bottom: 1.5rem;
}

/* Workout History */
.workout-history {
  margin-top: 2rem;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.workout-history h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.history-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 10px;
}

.history-info h4 {
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.history-date {
  color: #999;
  font-size: 0.85rem;
}

.history-exercises {
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.exercise-tag {
  background: #e8f4fc;
  color: #3498db;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.history-stats {
  margin-top: 0.5rem;
  color: #666;
  font-size: 0.85rem;
}

.history-actions {
  display: flex;    
  gap: 0.5rem;
}

.no-workout {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>