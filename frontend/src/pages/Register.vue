<script>
export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register() {
      try {
        const response = await fetch('http://localhost:3000/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password
          })
        });

        const data = await response.json();

        if (data.error) {
          this.error = data.error;
        } else {
          // Redirect to login
          this.$router.push('/login');
        }
      } catch (err) {
        this.error = 'Server error. Please try again.';
      }
    }
  }
}
</script>

<template>
  <div class="register-page">
    <div class="register-form">
      <h2>Create Account</h2>
      
      <div v-if="error" class="error">{{ error }}</div>

      <form @submit.prevent="register">
        <div class="form-group">
          <label>Name:</label>
          <input type="text" v-model="name" required />
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="email" v-model="email" required />
        </div>

        <div class="form-group">
          <label>Password:</label>
          <input type="password" v-model="password" required />
        </div>

        <button type="submit" class="btn">Register</button>
      </form>

      <p class="login-link">
        Already have an account? <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.register-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
}

.register-form h2 {
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
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.btn:hover {
  background-color: #219a52;
}

.error {
  background-color: #ffebee;
  color: #c62828;
  padding: 0.75rem;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.login-link {
  text-align: center;
  margin-top: 1rem;
}
</style>