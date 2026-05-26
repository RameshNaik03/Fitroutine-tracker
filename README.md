# FitRoutine Tracker

FitRoutine Tracker is a modern full-stack fitness tracking web application built using React, Tailwind CSS, Node.js, Express.js, and MongoDB.

The application helps users manage workout routines, track health progress, monitor daily habits, and maintain fitness discipline through a clean and responsive dashboard.

---

# Project Goals

This project is being developed step by step while learning:

- Full Stack Development
- React Component Architecture
- Backend API Development
- Authentication Systems
- MongoDB Database Integration
- Responsive UI Design
- Real-world Git & GitHub Workflow
- Scalable Project Structure

---

# Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios

## Backend
- Node.js
- Express.js

## Database
- MongoDB

## Authentication
- JWT Authentication
- bcrypt Password Hashing

---

# Features

- User Registration & Login
- Dashboard UI
- Daily Workout Tracking
- Water Intake Tracker
- Sleep Tracking
- Calories Burned Tracking
- BMI Calculator
- Weekly Progress Charts
- Responsive Design
- Dark/Light Mode
- Profile Management
- Workout Categories
- Motivation Quotes
- AI Workout Suggestions (Planned)

---

# Project Structure
fitroutine-tracker/
│
├── client/                     # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── WorkoutCard.jsx
│   │   │   ├── ProgressChart.jsx
│   │   │   ├── WaterTracker.jsx
│   │   │   ├── SleepTracker.jsx
│   │   │   ├── BMICalculator.jsx
│   │   │   └── QuoteCard.jsx
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Workouts.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   │
│   │   ├── utils/
│   │   │   └── calculateBMI.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── tailwind.config.js
│
├── server/                     # Express Backend
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── workoutController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Workout.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── workoutRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── utils/
│   │   └── generateToken.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore\
