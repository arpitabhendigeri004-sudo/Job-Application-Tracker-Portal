# 🚀 Job Application Tracker Portal

A modern **Full Stack MERN Application** that helps users efficiently track and manage job applications. The platform provides secure authentication, job application management, application analytics, search and filtering capabilities, and a responsive dashboard for monitoring job-hunting progress.

---

# 📌 Features

## 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Secure Password Hashing using bcrypt

## 📋 Job Management

* Add New Job Applications
* View All Applications
* Delete Applications
* Track Application Status
* Store Company & Role Information

## 📊 Dashboard Analytics

* Total Applications Counter
* Applied Jobs Count
* Interview Count
* Offer Count
* Progress Tracking
* Recent Activity Section

## 🔍 Search & Filter

* Search by Company Name
* Search by Role
* Filter Applications by Status
* Real-Time Search Results

## 🎨 User Interface

* Modern SaaS-Inspired Design
* Responsive Layout
* Gradient Backgrounds
* Glassmorphism Cards
* Interactive Dashboard
* Mobile Friendly Design

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* React Icons

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

## Database

* MongoDB Atlas
* Mongoose ODM

## Tools

* Git
* GitHub
* VS Code
* Postman

---

# 📂 Project Structure

```bash
Job-Application-Tracker-Portal
│
├── client
│   ├── src
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   └── jobController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   ├── User.js
│   │   └── JobApplication.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── jobRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/job-application-tracker-portal.git
cd job-application-tracker-portal
```

---

# Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=your_secret_key
```

Run Backend:

```bash
npm run dev
```

Backend URL:

```bash
http://localhost:5000
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend URL:

```bash
http://localhost:5173
```

---

# API Endpoints

## Authentication

### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "name": "Arpita",
  "email": "arpita@gmail.com",
  "password": "123456"
}
```

### Login User

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "arpita@gmail.com",
  "password": "123456"
}
```

---

## Job Applications

### Get All Jobs

```http
GET /api/jobs
```

### Add Job

```http
POST /api/jobs
```

Request Body:

```json
{
  "companyName": "Google",
  "role": "Frontend Developer"
}
```

### Delete Job

```http
DELETE /api/jobs/:id
```

---

# 📸 Screenshots
<img width="960" height="540" alt="SS1" src="https://github.com/user-attachments/assets/2dc57245-bc41-43da-9975-54ec1cc682d0" />
<img width="960" height="540" alt="SS2" src="https://github.com/user-attachments/assets/5524c62f-89e8-44d1-972b-1ab9b80382ff" />
<img width="960" height="540" alt="SS3" src="https://github.com/user-attachments/assets/3991ef61-412b-4ad8-aa2b-23fca32b3844" />

# 🚀 Future Enhancements

* Edit Job Applications
* Update Application Status
* Interview Scheduling
* Calendar Integration
* Email Notifications
* Analytics Charts
* CSV Export
* Resume Upload
* Notes & Tags
* Dark Mode

---

# 🎯 Learning Outcomes

Through this project, I learned:

* Full Stack MERN Development
* REST API Development
* MongoDB Database Design
* JWT Authentication
* Protected Routes
* CRUD Operations
* React State Management
* API Integration with Axios
* Git & GitHub Workflow
* Responsive UI Design

---

# 👨‍💻 Author

**Arpita Bhendigeri**

GitHub: https://github.com/YOUR_USERNAME

LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN_PROFILE

---

# ⭐ Support

If you like this project:

⭐ Star the repository

🍴 Fork the project

📢 Share it with your friends

---

## 💡 Project Goal

The Job Application Tracker Portal helps students and professionals organize their job search process by tracking applications, monitoring interview stages, and managing opportunities in one centralized platform.

**Built with ❤️ using React.js, Node.js, Express.js, MongoDB, and JWT Authentication.**
