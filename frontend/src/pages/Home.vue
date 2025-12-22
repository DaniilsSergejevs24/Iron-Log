<script>
export default {
  name: 'Home'
}
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1>🏋️ Welcome to IronLog</h1>
      <p>Track your gym progress the smart way</p>
      <div class="hero-buttons">
        <router-link to="/register" class="btn btn-primary">Get Started</router-link>
        <router-link to="/exercises" class="btn btn-secondary">Browse Exercises</router-link>
      </div>
    </div>

    <div class="features">
      <div class="feature">
        <h3>📝 Log Workouts</h3>
        <p>Track your exercises, weights, reps, and sets</p>
      </div>
      <div class="feature">
        <h3>📊 Track Progress</h3>
        <p>See your improvement over time</p>
      </div>
      <div class="feature">
        <h3>🎯 Set Goals</h3>
        <p>Define targets and achieve them</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
}

.hero {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s;
}

.btn:hover {
  transform: scale(1.05);
}

.btn-primary {
  background-color: #e74c3c;
  color: white;
}

.btn-secondary {
  background-color: white;
  color: #2c3e50;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.feature {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.feature h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}
</style>