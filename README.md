# 🏋️ IronLog

**A gym progress tracking application**

Track your workouts, set goals, and monitor your fitness progress.

---

## 📋 About

IronLog is a web application that helps gym enthusiasts track their workout progress. Instead of using notepads or phone notes, users can log their exercises, weights, reps, and sets in an organized way.

### Features

- **User Authentication** - Register and login to your personal account
- **Workout Logging** - Track exercises with weight, reps, sets per exercise
- **Exercise Database** - Browse exercises with descriptions and video tutorials
- **Exercise Filters** - Filter exercises by muscle group
- **Personal Goals** - Set fitness goals and track your progress
- **Predictions** - View progress charts and predict future performance
- **Admin Panel** - Manage exercises and users (admin only)
- **Automation** - n8n workflow to remind inactive users

---

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- Prisma ORM
- MySQL

**Frontend:**
- Vue.js 3
- Vue Router
- Chart.js (for predictions)

**Automation:**
- n8n

---

## 📁 Project Structure
```
ironlog/
├── backend/
│   ├── routes/
│   │   ├── auth.js        # Login & Register
│   │   ├── users.js       # User management
│   │   ├── exercises.js   # Exercise CRUD
│   │   ├── workouts.js    # Workout logging
│   │   └── goals.js       # User goals
│   ├── prisma/
│   │   └── schema.prisma  # Database schema
│   ├── generated/         # Prisma client
│   └── index.js           # Main server file
│
└── frontend/
    └── src/
        ├── pages/
        │   ├── Home.vue
        │   ├── Login.vue
        │   ├── Register.vue
        │   ├── Dashboard.vue
        │   ├── Exercises.vue
        │   ├── Goals.vue
        │   ├── Predictions.vue
        │   └── Admin.vue
        ├── router/
        │   └── index.js
        └── App.vue
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v20+)
- MySQL (MAMP)
- npm
- n8n (for automation)

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```
DATABASE_URL="mysql://root:root@localhost:8889/ironlog"
```

4. Generate Prisma client and push database:
```bash
npx prisma generate
npx prisma db push
```

5. Start the server:
```bash
node index.js
```

Server runs on `http://localhost:3000`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

### n8n Setup (Automation)

1. Start n8n:
```bash
n8n start
```

2. Open `http://localhost:5678`
3. Create workflow to check inactive users

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | User login |

### Exercises
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/exercises` | Get all exercises |
| GET | `/exercises/:id` | Get single exercise |
| POST | `/exercises` | Create exercise (admin) |
| PUT | `/exercises/:id` | Update exercise (admin) |
| DELETE | `/exercises/:id` | Delete exercise (admin) |

### Workouts
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/workouts/user/:userId` | Get user's workouts |
| POST | `/workouts` | Create new workout |
| POST | `/workouts/:id/exercises` | Add exercise to workout |
| POST | `/workouts/exercises/:id/sets` | Add set to exercise |
| PUT | `/workouts/sets/:id` | Update set |
| DELETE | `/workouts/sets/:id` | Delete set |
| DELETE | `/workouts/:id` | Delete workout |

### Goals
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/goals/user/:userId` | Get user's goals |
| POST | `/goals` | Create goal |
| PUT | `/goals/:id` | Update goal |
| DELETE | `/goals/:id` | Delete goal |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users (admin) |
| GET | `/users/:id` | Get single user |
| GET | `/users/inactive` | Get inactive users (for n8n) |
| DELETE | `/users/:id` | Delete user (admin) |

---

## 👤 Author

Daniils Sergejevs

---

## 📝 License

This project is for educational purposes.