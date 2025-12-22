<script>
export default {
  name: 'App',
  data() {
    return {
      user: null
    }
  },
  created() {
    // Check if user is logged in (from localStorage)
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
    }

    // Listen for login events
    window.addEventListener('user-logged-in', (event) => {
      this.user = event.detail;
    });
  },
  methods: {
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      this.$router.push('/');
    }
  }
}
</script>


<template>
  <div id="app">
    <!-- Navigation menu -->
    <nav class="navbar">
      <div class="nav-brand">
        <router-link to="/">🏋️ IronLog</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/exercises">Exercises</router-link>
        <router-link v-if="user" to="/dashboard">Dashboard</router-link>
        <router-link v-if="user" to="/goals">Goals</router-link>
        <router-link v-if="user && user.role === 'admin'" to="/admin">Admin</router-link>
        <router-link v-if="!user" to="/login">Login</router-link>
        <router-link v-if="!user" to="/register">Register</router-link>
        <button v-if="user" @click="logout" class="logout-btn">Logout</button>
      </div>
    </nav>

    <!-- Page content -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

#app {
  min-height: 100vh;
}

.navbar {
  background-color: #2c3e50;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-links a:hover {
  background-color: #34495e;
}

.nav-links a.router-link-active {
  background-color: #3498db;
}

.logout-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: #c0392b;
}

.main-content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
