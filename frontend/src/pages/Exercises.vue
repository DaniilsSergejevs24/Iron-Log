<script>
export default {
  name: 'Exercises',
  data() {
    return {
      exercises: [],
      loading: true,
      selectedGroup: 'all',
      searchQuery: ''
    }
  },

  async created() {
    await this.fetchExercises();
  },

  computed: {
    muscleGroups() {
      const groups = [];
      for (let exercise of this.exercises) {
        if (!groups.includes(exercise.muscle_group)) {
          groups.push(exercise.muscle_group);
        }
      }
      groups.sort();
      return groups;
    },

    filteredExercises() {
      let result = this.exercises;

      if (this.selectedGroup !== 'all') {
        result = result.filter(ex => ex.muscle_group === this.selectedGroup);
      }

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        result = result.filter(ex => 
          ex.name.toLowerCase().includes(query) ||
          ex.muscle_group.toLowerCase().includes(query)
        );
      }

      return result;
    },

    groupCounts() {
      const counts = {};
      for (let exercise of this.exercises) {
        const group = exercise.muscle_group;
        if (counts[group]) {
          counts[group]++;
        } else {
          counts[group] = 1;
        }
      }
      return counts;
    }
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
    },

    selectGroup(group) {
      this.selectedGroup = group;
    },

    getGroupColor(group) {
      const colors = {
        'Chest': '#e74c3c',
        'Back': '#3498db',
        'Legs': '#27ae60',
        'Shoulders': '#f39c12',
        'Arms': '#9b59b6',
        'Core': '#1abc9c',
        'Biceps': '#e67e22',
        'Triceps': '#34495e',
        'Glutes': '#e91e63',
        'Calves': '#00bcd4',
        'Quads': '#27ae60',
        'Upper Back': '#3498db'
      };
      return colors[group] || '#95a5a6';
    }
  }
}
</script>

<template>
  <div class="exercises-page">
    <div class="page-header">
      <h1>💪 Exercise Library</h1>
      <p class="subtitle">Browse exercises and filter by muscle group</p>
    </div>

    <!-- Search Bar -->
    <div class="search-bar">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="🔍 Search exercises..."
      />
    </div>

    <!-- Filter Buttons -->
    <div class="filter-section">
      <button 
        class="filter-btn"
        :class="{ active: selectedGroup === 'all' }"
        @click="selectGroup('all')"
      >
        All ({{ exercises.length }})
      </button>
      
      <button 
        v-for="group in muscleGroups" 
        :key="group"
        class="filter-btn"
        :class="{ active: selectedGroup === group }"
        :style="selectedGroup === group ? { backgroundColor: getGroupColor(group) } : {}"
        @click="selectGroup(group)"
      >
        {{ group }} ({{ groupCounts[group] }})
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading">
      Loading exercises...
    </div>

    <!-- No Results -->
    <div v-else-if="filteredExercises.length === 0" class="no-results">
      <div class="no-results-icon">🔍</div>
      <p>No exercises found</p>
      <button @click="selectedGroup = 'all'; searchQuery = ''" class="btn-reset">
        Clear filters
      </button>
    </div>

    <!-- Exercises Grid -->
    <div v-else class="exercises-grid">
      <div 
        v-for="exercise in filteredExercises" 
        :key="exercise.exercise_id" 
        class="exercise-card"
      >
        <div class="card-header">
          <span 
            class="muscle-badge" 
            :style="{ backgroundColor: getGroupColor(exercise.muscle_group) }"
          >
            {{ exercise.muscle_group }}
          </span>
        </div>
        
        <h3>{{ exercise.name }}</h3>
        
        <p class="description">{{ exercise.description || 'No description available' }}</p>
        
        <a 
          v-if="exercise.video_url" 
          :href="exercise.video_url" 
          target="_blank" 
          class="video-link"
        >
          ▶️ Watch Tutorial
        </a>
      </div>
    </div>

    <!-- Results Count -->
    <div v-if="!loading && filteredExercises.length > 0" class="results-count">
      Showing {{ filteredExercises.length }} of {{ exercises.length }} exercises
    </div>
  </div>
</template>

<style scoped>
.exercises-page {
  max-width: 1000px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 1.5rem;
}

.page-header h1 {
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.subtitle {
  color: #666;
}

/* Search Bar */
.search-bar {
  margin-bottom: 1rem;
}

.search-bar input {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.search-bar input:focus {
  outline: none;
  border-color: #3498db;
}

/* Filter Section */
.filter-section {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  background: white;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: #3498db;
}

.filter-btn.active {
  background: #3498db;
  border-color: #3498db;
  color: white;
}

/* Loading & No Results */
.loading,
.no-results {
  text-align: center;
  padding: 3rem;
  color: #666;
}

.no-results-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.btn-reset {
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Exercises Grid */
.exercises-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

/* Exercise Card */
.exercise-card {
  background: white;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.exercise-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.12);
}

.card-header {
  margin-bottom: 0.75rem;
}

.muscle-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  color: white;
  font-size: 0.8rem;
  font-weight: 500;
}

.exercise-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.15rem;
}

.description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.video-link {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
}

.video-link:hover {
  text-decoration: underline;
}

/* Results Count */
.results-count {
  text-align: center;
  margin-top: 1.5rem;
  color: #999;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 600px) {
  .exercises-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-section {
    justify-content: center;
  }
}
</style>