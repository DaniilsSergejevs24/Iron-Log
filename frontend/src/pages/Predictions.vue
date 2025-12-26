<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Register Chart.js components (required for chart to work)
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
  name: 'Predictions',
  components: {
    LineChart: Line
  },
  data() {
    return {
      user: null,
      exercises: [],
      selectedExercise: '',
      workoutHistory: [],
      chartData: null,
      predictionWeeks: 8,
      trainingLevel: 'intermediate',
      currentMax: 0,
      predictedMax: 0,
      goalWeight: '',
      weeksToGoal: 0,
      // Weekly gain rates based on fitness research (kg per week)
      // Each level has: min (conservative), typical, max (optimistic)
      gainRates: {
        beginner: { min: 1.5, typical: 2.0, max: 2.5 },
        intermediate: { min: 0.5, typical: 1.0, max: 1.25 },
        advanced: { min: 0.1, typical: 0.25, max: 0.5 }
      }
    }
  },

  // Runs when page loads
  async created() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      await this.fetchExercises();
    }
  },

  // Chart display settings
  computed: {
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Weight Progress & Prediction', font: { size: 16 } }
        },
        scales: {
          y: { title: { display: true, text: 'Weight (kg)' } },
          x: { title: { display: true, text: 'Date' } }
        }
      }
    }
  },

  methods: {
    // ==========================================
    // GET EXERCISES FROM API
    // ==========================================
    async fetchExercises() {
      const response = await fetch('http://localhost:3000/exercises');
      this.exercises = await response.json();
    },

    // ==========================================
    // GET GAIN RATES FOR SELECTED TRAINING LEVEL
    // Returns object with min, typical, max values
    // ==========================================
    getCurrentRates() {
      return this.gainRates[this.trainingLevel];
    },

    // ==========================================
    // MAIN FUNCTION: ANALYZE SELECTED EXERCISE
    // ==========================================
    async analyzeExercise() {
      if (!this.selectedExercise) return;

      // 1. Fetch user's workouts from API
      const response = await fetch(`http://localhost:3000/workouts/user/${this.user.user_id}`);
      const workouts = await response.json();

      // 2. Extract data for selected exercise
      const exerciseData = [];

      // Loop through each workout
      for (let workout of workouts) {
        // Loop through exercises in that workout
        for (let we of workout.workout_exercises || []) {
          // Check if this is the exercise we want
          if (we.exercise_id === parseInt(this.selectedExercise)) {
            // Find the heaviest weight in all sets
            let maxWeight = 0;
            for (let set of we.sets || []) {
              if (set.weight > maxWeight) {
                maxWeight = set.weight;
              }
            }
            // Save to our array
            if (maxWeight > 0) {
              exerciseData.push({
                date: new Date(workout.date),
                weight: maxWeight
              });
            }
          }
        }
      }

      // 3. Sort by date (oldest first)
      exerciseData.sort((a, b) => a.date - b.date);
      this.workoutHistory = exerciseData;

      // 4. Check if we have data
      if (exerciseData.length === 0) {
        alert('No workout data found for this exercise!');
        this.chartData = null;
        return;
      }

      // 5. Calculate predictions and create chart
      this.calculatePredictions();
    },

    // ==========================================
    // CALCULATE PREDICTIONS
    // ==========================================
    calculatePredictions() {
      // Find current max weight from history
      this.currentMax = 0;
      for (let entry of this.workoutHistory) {
        if (entry.weight > this.currentMax) {
          this.currentMax = entry.weight;
        }
      }

      // Get rates for selected level
      const rates = this.getCurrentRates();

      // Calculate predicted max using typical rate
      // Formula: current + (weekly gain × weeks)
      this.predictedMax = this.currentMax + (rates.typical * this.predictionWeeks);

      // Calculate weeks to reach goal
      if (this.goalWeight > this.currentMax && rates.typical > 0) {
        // Formula: (goal - current) / weekly gain
        this.weeksToGoal = Math.ceil((this.goalWeight - this.currentMax) / rates.typical);
      } else {
        this.weeksToGoal = 0;
      }

      // Create the chart
      this.createChart();
    },

    // ==========================================
    // CREATE CHART WITH 3 PREDICTION LINES
    // ==========================================
    createChart() {
      const rates = this.getCurrentRates();

      // Arrays for chart data
      const labels = [];           // Dates for X axis
      const actualWeights = [];    // Blue line - real data
      const optimisticWeights = []; // Green line - best case
      const typicalWeights = [];    // Orange line - expected
      const conservativeWeights = []; // Red line - worst case

      // ----- PART 1: Add actual workout data -----
      for (let entry of this.workoutHistory) {
        // Format date as "Dec 24"
        const dateStr = entry.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        labels.push(dateStr);
        actualWeights.push(entry.weight);
        // No predictions for past dates
        optimisticWeights.push(null);
        typicalWeights.push(null);
        conservativeWeights.push(null);
      }

      // ----- PART 2: Add predicted future data -----
      const lastEntry = this.workoutHistory[this.workoutHistory.length - 1];
      const lastDate = lastEntry.date;
      const lastWeight = lastEntry.weight;

      // Connect predictions to last actual point
      optimisticWeights[optimisticWeights.length - 1] = lastWeight;
      typicalWeights[typicalWeights.length - 1] = lastWeight;
      conservativeWeights[conservativeWeights.length - 1] = lastWeight;

      // Generate predictions for each future week
      for (let week = 1; week <= this.predictionWeeks; week++) {
        // Calculate future date
        const futureDate = new Date(lastDate);
        futureDate.setDate(futureDate.getDate() + (week * 7));
        const dateStr = futureDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        labels.push(dateStr);

        // No actual data for future
        actualWeights.push(null);

        // Calculate predictions using formula: lastWeight + (rate × weeks)
        optimisticWeights.push(lastWeight + (rates.max * week));
        typicalWeights.push(lastWeight + (rates.typical * week));
        conservativeWeights.push(lastWeight + (rates.min * week));
      }

      // ----- PART 3: Set chart data with all lines -----
      this.chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Actual Weight',
            data: actualWeights,
            borderColor: '#3498db',
            backgroundColor: '#3498db',
            pointRadius: 6,
            pointHoverRadius: 8
          },
          {
            label: 'Optimistic (+' + rates.max + ' kg/week)',
            data: optimisticWeights,
            borderColor: '#27ae60',
            backgroundColor: '#27ae60',
            borderDash: [5, 5],
            pointRadius: 3
          },
          {
            label: 'Typical (+' + rates.typical + ' kg/week)',
            data: typicalWeights,
            borderColor: '#f39c12',
            backgroundColor: '#f39c12',
            borderDash: [5, 5],
            pointRadius: 4
          },
          {
            label: 'Conservative (+' + rates.min + ' kg/week)',
            data: conservativeWeights,
            borderColor: '#e74c3c',
            backgroundColor: '#e74c3c',
            borderDash: [5, 5],
            pointRadius: 3
          }
        ]
      };
    },

    // ==========================================
    // UPDATE WHEN SETTINGS CHANGE
    // ==========================================
    updatePredictions() {
      if (this.workoutHistory.length > 0) {
        this.calculatePredictions();
      }
    },

    // ==========================================
    // HELPER: Get exercise name by ID
    // ==========================================
    getExerciseName(id) {
      const exercise = this.exercises.find(e => e.exercise_id === parseInt(id));
      return exercise ? exercise.name : '';
    }
  }
}
</script>

<template>
  <div class="predictions-page">
    <h1>📊 Progress & Predictions</h1>
    <p class="subtitle">Analyze your performance and predict future progress</p>

    <!-- Exercise & Level Selection -->
    <div class="card">
      <div class="form-row">
        <div class="form-group">
          <label>Select Exercise:</label>
          <select v-model="selectedExercise" @change="analyzeExercise">
            <option value="">Choose an exercise...</option>
            <option v-for="ex in exercises" :key="ex.exercise_id" :value="ex.exercise_id">
              {{ ex.name }} ({{ ex.muscle_group }})
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>Your Training Level:</label>
          <select v-model="trainingLevel" @change="updatePredictions">
            <option value="beginner">Beginner (0-6 months of training)</option>
            <option value="intermediate">Intermediate (6 months - 2 years)</option>
            <option value="advanced">Advanced (2+ years of training)</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Info Card: Progression Rates -->
    <div class="info-card">
      <h3>📚 Realistic Progression Rates (based on fitness research)</h3>
      <div class="rates-grid">
        <div class="rate-item">
          <span class="rate-badge beginner">Beginner</span>
          <span class="rate-value">+1.5 to 2.5 kg/week</span>
          <span class="rate-desc">Rapid gains, muscles adapt quickly</span>
        </div>
        <div class="rate-item">
          <span class="rate-badge intermediate">Intermediate</span>
          <span class="rate-value">+0.5 to 1.25 kg/week</span>
          <span class="rate-desc">Steady progress, consistent gains</span>
        </div>
        <div class="rate-item">
          <span class="rate-badge advanced">Advanced</span>
          <span class="rate-value">+0.1 to 0.5 kg/week</span>
          <span class="rate-desc">Slower gains, closer to genetic limit</span>
        </div>
      </div>
    </div>

    <!-- Results Section -->
    <div v-if="chartData" class="results">
      
      <!-- Stats Cards -->
      <div class="stats-row">
        <div class="stat-card">
          <span class="stat-icon">🏋️</span>
          <div class="stat-info">
            <span class="stat-value">{{ currentMax }} kg</span>
            <span class="stat-label">Current Max</span>
          </div>
        </div>

        <div class="stat-card">
          <span class="stat-icon">📈</span>
          <div class="stat-info">
            <span class="stat-value">+{{ getCurrentRates().typical }} kg</span>
            <span class="stat-label">Expected per Week</span>
          </div>
        </div>

        <div class="stat-card highlight">
          <span class="stat-icon">🎯</span>
          <div class="stat-info">
            <span class="stat-value">{{ predictedMax.toFixed(1) }} kg</span>
            <span class="stat-label">Predicted in {{ predictionWeeks }} weeks</span>
          </div>
        </div>
      </div>

      <!-- Settings -->
      <div class="card settings-row">
        <div class="setting">
          <label>Prediction Weeks:</label>
          <input 
            type="number" 
            v-model.number="predictionWeeks" 
            min="1" 
            max="52" 
            @change="updatePredictions" 
          />
        </div>

        <div class="setting">
          <label>Goal Weight (kg):</label>
          <input 
            type="number" 
            v-model.number="goalWeight" 
            placeholder="e.g. 120" 
            @change="updatePredictions" 
          />
          <span v-if="weeksToGoal > 0" class="goal-result">
            🎯 Reach in ~{{ weeksToGoal }} weeks ({{ Math.round(weeksToGoal / 4) }} months)
          </span>
          <span v-else-if="goalWeight && goalWeight <= currentMax" class="goal-reached">
            ✅ Goal already reached!
          </span>
        </div>
      </div>

      <!-- Chart -->
      <div class="card chart-container">
        <LineChart :data="chartData" :options="chartOptions" />
      </div>

      <!-- Chart Legend -->
    <div class="legend-row">
    <span class="legend-item"><span class="dot blue"></span> Actual</span>
    <span class="legend-item"><span class="dot green"></span> Optimistic (best case)</span>
    <span class="legend-item"><span class="dot orange"></span> Typical (expected)</span>
    <span class="legend-item"><span class="dot red"></span> Conservative (with plateaus)</span>
    </div>

      <!-- Workout History Table -->
      <div class="card">
        <h3>📋 Your {{ getExerciseName(selectedExercise) }} History</h3>
        <table class="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Max Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in workoutHistory" :key="index">
              <td>{{ entry.date.toLocaleDateString() }}</td>
              <td><strong>{{ entry.weight }} kg</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Empty State (no exercise selected) -->
    <div v-else class="empty-state">
      <div class="empty-icon">📈</div>
      <p>Select an exercise above to see your progress and predictions</p>
    </div>
  </div>
</template>

<style scoped>
.predictions-page {
  max-width: 900px;
  margin: 0 auto;
}

.predictions-page h1 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
}

/* Card Styles */
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
}

/* Form Row */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

/* Info Card */
.info-card {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  padding: 1.25rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.info-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.rates-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.rate-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.rate-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  width: fit-content;
}

.rate-badge.beginner { background: #d4edda; color: #155724; }
.rate-badge.intermediate { background: #fff3cd; color: #856404; }
.rate-badge.advanced { background: #f8d7da; color: #721c24; }

.rate-value {
  font-weight: bold;
  color: #2c3e50;
}

.rate-desc {
  font-size: 0.8rem;
  color: #666;
}

/* Stats Row */
.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  background: white;
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-card.highlight {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
}

.stat-icon {
  font-size: 2rem;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
}

.stat-label {
  font-size: 0.85rem;
  opacity: 0.8;
}

/* Settings Row */
.settings-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.setting {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.setting label {
  font-weight: 500;
  color: #333;
}

.setting input {
  width: 80px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.goal-result {
  color: #e67e22;
  font-weight: 500;
}

.goal-reached {
  color: #27ae60;
  font-weight: 500;
}

/* Chart Container */
.chart-container {
  height: 400px;
}

/* Legend Row */
.legend-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
  color: #555;
}

.legend-row .legend-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.legend-row .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot.blue { background: #3498db; }
.dot.green { background: #27ae60; }
.dot.orange { background: #f39c12; }
.dot.red { background: #e74c3c; }

/* History Table */
.card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.history-table {
  width: 100%;
  border-collapse: collapse;
}

.history-table th,
.history-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.history-table th {
  background: #f9f9f9;
  font-weight: 500;
  color: #666;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-state p {
  color: #666;
  font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .form-row,
  .rates-grid,
  .stats-row,
  .legend-items {
    grid-template-columns: 1fr;
  }
}
</style>