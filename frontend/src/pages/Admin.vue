<script>
export default {
  name: 'Admin',
  data() {
    return {
        user: null,
        exercises: [],
        users: [],
        showForm: false,
        editingExercise: null,
        newExercise: {
            name: '',
            description: '',
            video_url: '',
            muscle_group: ''
        }
    }
},
  async created() {
    // Check if user is admin
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      
      if (this.user.role !== 'admin') {
        // Not admin - redirect to home
        alert('Access denied. Admin only.');
        this.$router.push('/');
        return;
      }
      
      await this.fetchExercises();
      await this.fetchUsers();
    } else {
      // Not logged in - redirect to login
      this.$router.push('/login');
    }
  },
  methods: {
    async fetchExercises() {
      try {
        const response = await fetch('http://localhost:3000/exercises');
        this.exercises = await response.json();
      } catch (err) {
        console.error('Error:', err);
      }
    },
    async fetchUsers() {
      try {
        const response = await fetch('http://localhost:3000/users');
        this.users = await response.json();
      } catch (err) {
        console.error('Error:', err);
      }
    },
    async addExercise() {
      try {
        const response = await fetch('http://localhost:3000/exercises', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.newExercise)
        });

        if (response.ok) {
          await this.fetchExercises();
          this.showForm = false;
          this.newExercise = { name: '', description: '', video_url: '', muscle_group: '' };
        }
      } catch (err) {
        console.error('Error:', err);
      }
    },
    async deleteExercise(id) {
      if (confirm('Delete this exercise?')) {
        try {
          await fetch(`http://localhost:3000/exercises/${id}`, { method: 'DELETE' });
          await this.fetchExercises();
        } catch (err) {
          console.error('Error:', err);
        }
      }
    },
    async deleteUser(id) {
      if (confirm('Delete this user?')) {
        try {
          await fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE' });
          await this.fetchUsers();
        } catch (err) {
          console.error('Error:', err);
        }
      }
    },

    // Edit exercise - load data into form
    editExercise(exercise) {
    this.editingExercise = exercise.exercise_id;
    this.newExercise = {
        name: exercise.name,
        description: exercise.description || '',
        video_url: exercise.video_url || '',
        muscle_group: exercise.muscle_group
    };
    this.showForm = true;
    },

    // Cancel editing
    cancelEdit() {
    this.editingExercise = null;
    this.newExercise = { name: '', description: '', video_url: '', muscle_group: '' };
    this.showForm = false;
    },

    // Save exercise (create or update)
    async saveExercise() {
    try {
        let url = 'http://localhost:3000/exercises';
        let method = 'POST';

        // If editing, use PUT method
        if (this.editingExercise) {
        url = `http://localhost:3000/exercises/${this.editingExercise}`;
        method = 'PUT';
        }

        const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.newExercise)
        });

        if (response.ok) {
        await this.fetchExercises();
        this.cancelEdit();
        }
    } catch (err) {
        console.error('Error saving exercise:', err);
    }
    }
  }
}
</script>

<template>
  <div class="admin-page">
    <h1>⚙️ Admin Panel</h1>

    <!-- Exercises Section -->
    <section class="admin-section">
      <h2>Manage Exercises</h2>
      
      <button @click="showForm = !showForm; editingExercise = null; newExercise = { name: '', description: '', video_url: '', muscle_group: '' }" class="btn btn-primary">
        {{ showForm && !editingExercise ? 'Cancel' : '+ Add Exercise' }}
      </button>

      <!-- Add/Edit Exercise Form -->
      <div v-if="showForm" class="exercise-form">
        <h3>{{ editingExercise ? 'Edit Exercise' : 'Add New Exercise' }}</h3>
        <form @submit.prevent="saveExercise">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" v-model="newExercise.name" required />
          </div>
          <div class="form-group">
            <label>Muscle Group:</label>
            <input type="text" v-model="newExercise.muscle_group" required placeholder="e.g. Chest, Back, Legs" />
          </div>
          <div class="form-group">
            <label>Description:</label>
            <textarea v-model="newExercise.description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label>Video URL:</label>
            <input type="text" v-model="newExercise.video_url" placeholder="YouTube link" />
          </div>
          <div class="form-buttons">
            <button type="button" @click="cancelEdit" class="btn btn-secondary">Cancel</button>
            <button type="submit" class="btn btn-success">
              {{ editingExercise ? 'Save Changes' : 'Add Exercise' }}
            </button>
          </div>
        </form>
      </div>

      <!-- Exercises Table -->
      <table class="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Muscle Group</th>
            <th>Video</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ex in exercises" :key="ex.exercise_id">
            <td>{{ ex.exercise_id }}</td>
            <td>{{ ex.name }}</td>
            <td>{{ ex.muscle_group }}</td>
            <td>
              <span v-if="ex.video_url" class="has-video">✓ Yes</span>
              <span v-else class="no-video">✗ No</span>
            </td>
            <td class="actions-cell">
              <button @click="editExercise(ex)" class="btn-edit">Edit</button>
              <button @click="deleteExercise(ex.exercise_id)" class="btn-delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Users Section -->
    <section class="admin-section">
      <h2>Manage Users</h2>
      
      <table class="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.user_id">
            <td>{{ user.user_id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span :class="['role-badge', user.role]">{{ user.role }}</span>
            </td>
            <td>
              <button @click="deleteUser(user.user_id)" class="btn-delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<style scoped>
.admin-page h1 {
  margin-bottom: 2rem;
  color: #2c3e50;
}

.admin-section {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.admin-section h2 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-success {
  background-color: #27ae60;
  color: white;
}

.btn-delete {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.exercise-form {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
}

.admin-table th,
.admin-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.admin-table th {
  background-color: #f5f5f5;
}

/* Form Buttons */
.form-buttons {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.btn-secondary {
  background-color: #95a5a6;
  color: white;
}

/* Actions Cell */
.actions-cell {
  display: flex;
  gap: 0.5rem;
}

.btn-edit {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.btn-edit:hover {
  background-color: #2980b9;
}

/* Video Column */
.has-video {
  color: #27ae60;
  font-weight: 500;
}

.no-video {
  color: #999;
}

/* Role Badge */
.role-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
}

.role-badge.admin {
  background-color: #e74c3c;
  color: white;
}

.role-badge.user {
  background-color: #3498db;
  color: white;
}
</style>