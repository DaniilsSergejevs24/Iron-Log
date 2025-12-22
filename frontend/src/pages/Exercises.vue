<script>
export default {
  name: 'Exercises',
  data() {
    return {
      exercises: [],
      loading: true
    }
  },
  async created() {
    await this.fetchExercises();
  },
  methods: {
    async fetchExercises() {
      try {
        const response = await fetch('http://localhost:3000/exercises');
        this.exercises = await response.json();
        this.loading = false;
      } catch (err) {
        console.error('Error fetching exercises:', err);
        this.loading = false;
      }
    }
  }
}
</script>

<template>
  <div class="exercises-page">
    <h1>Exercise Library</h1>
    
    <div v-if="loading" class="loading">Loading exercises...</div>

    <div v-else-if="exercises.length === 0" class="no-exercises">
      No exercises found. Admin needs to add exercises.
    </div>

    <div v-else class="exercises-grid">
      <div v-for="exercise in exercises" :key="exercise.exercise_id" class="exercise-card">
        <h3>{{ exercise.name }}</h3>
        <span class="muscle-group">{{ exercise.muscle_group }}</span>
        <p>{{ exercise.description }}</p>
        <a v-if="exercise.video_url" :href="exercise.video_url" target="_blank" class="video-link">
          📺 Watch Video
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.exercises-page h1 {
  margin-bottom: 2rem;
  color: #2c3e50;
}

.loading, .no-exercises {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.exercises-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.exercise-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.exercise-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.muscle-group {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.exercise-card p {
  color: #666;
  margin-bottom: 1rem;
}

.video-link {
  color: #e74c3c;
  text-decoration: none;
  font-weight: bold;
}

.video-link:hover {
  text-decoration: underline;
}
</style>