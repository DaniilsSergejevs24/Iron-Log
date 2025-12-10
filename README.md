# 🏋️ IronLog

**A gym progress tracking application**

Track your workouts, set goals, and monitor your fitness progress.

---

## 📋 About

IronLog is a web application that helps gym enthusiasts track their workout progress. Instead of using notepads or phone notes, users can log their exercises, weights, reps, and sets in an organized way.

### Features

- **User Authentication** - Register and login to your personal account
- **Workout Logging** - Track exercises with weight, reps, sets, and notes
- **Exercise Database** - Browse exercises with descriptions and video tutorials
- **Personal Goals** - Set fitness goals and track your progress
- **Admin Panel** - Manage exercises and users (admin only)

---

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- Prisma ORM
- MySQL

**Frontend:**
- Vue.js
- Vue Router

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
    └── (Vue.js app)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v20+)
- MySQL (MAMP recommended)
- npm

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

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | User login |
| GET | `/exercises` | Get all exercises |
| POST | `/exercises` | Create exercise |
| PUT | `/exercises/:id` | Update exercise |
| DELETE | `/exercises/:id` | Delete exercise |
| GET | `/workouts/user/:userId` | Get user's workouts |
| POST | `/workouts` | Log new workout |
| PUT | `/workouts/:id` | Update workout |
| DELETE | `/workouts/:id` | Delete workout |
| GET | `/goals/user/:userId` | Get user's goals |
| POST | `/goals` | Create goal |
| PUT | `/goals/:id` | Update goal |
| DELETE | `/goals/:id` | Delete goal |

---

## 👤 Author

Daniils Sergejevs

---

## 📝 License

This project is for educational purposes.