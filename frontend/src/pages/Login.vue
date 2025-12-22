<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });

        const data = await response.json();

        if (data.error) {
          this.error = data.error;
        } else {
          // Save user to localStorage
          localStorage.setItem('user', JSON.stringify(data.user));
          
          // Trigger event to update navbar
          window.dispatchEvent(new CustomEvent('user-logged-in', { detail: data.user }));
          
          // Redirect to dashboard
          this.$router.push('/dashboard');
        }
      } catch (err) {
        this.error = 'Server error. Please try again.';
      }
    }
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-form">
      <h2>Login</h2>
      
      <div v-if="error" class="error">{{ error }}</div>

      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email:</label>
          <input type="email" v-model="email" required />
        </div>

        <div class="form-group">
          <label>Password:</label>
          <input type="password" v-model="password" required />
        </div>

        <button type="submit" class="btn">Login</button>
      </form>

      <p class="register-link">
        Don't have an account? <router-link to="/register">Register</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
}

.login-form h2 {
  text-align: center;
  margin-bottom: 1.5rem;
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

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.btn:hover {
  background-color: #2980b9;
}

.error {
  background-color: #ffebee;
  color: #c62828;
  padding: 0.75rem;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.register-link {
  text-align: center;
  margin-top: 1rem;
}
</style>