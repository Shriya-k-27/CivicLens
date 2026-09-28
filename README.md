# CivicLens 🇮🇳

### A Platform for Learning Indian Civics and Governance

CivicLens is a full-stack **MERN web application** designed to make Indian civics and governance easier to understand, explore, and engage with. The platform combines structured civic education, governance updates, information about Union Ministers, and community discussions in one place.

The project focuses on improving civic awareness among students and young citizens through **simple learning content, progress tracking, streaks, badges, verified governance updates, and community interaction**.

---

## 📌 Features

### 📚 Civic Academy

A structured learning section where authenticated users can learn about Indian civics and governance through organized modules and lessons.

- Structured civic-learning modules
- Individual lessons within modules
- Lesson completion tracking
- Learning progress percentage
- Daily learning streaks
- Achievement badges
- Protected access for registered users

### 📰 Civic Updates

A dedicated section for important governance and political updates.

- Governance-related news updates
- News fetched through NewsAPI
- Updates stored in MongoDB
- Automatic periodic news fetching
- Persistent storage of previously fetched updates
- Pagination for handling larger amounts of data
- Links to original news sources
- Community discussion under individual updates

### 💬 Community Discussions

Users can participate in discussions related to Civic Updates.

- View comments associated with an update
- Authenticated users can post comments
- Users can delete their own comments
- Maximum comment length validation
- Guest users can view discussions but must log in to participate

### 👥 Know Your Leaders

Provides searchable information about India's Union Ministers.

- Union Minister profiles
- Ministry information
- Educational background
- Professional and political background
- Individual leader detail pages
- Source-backed information

### 👤 User Dashboard & Profile

Authenticated users have access to a personalized dashboard.

- Learning progress
- Completed lessons
- Achievement badges
- Learning streak
- Account information
- User role
- Account creation date

### 🔐 Authentication & Authorization

CivicLens implements secure authentication and role-based access control.

- User registration and login
- JWT-based authentication
- Refresh-token based session handling
- Protected routes
- Password hashing using bcrypt
- User and administrator roles
- Admin-only content management

### ⚙️ Admin Content Management

Administrators can manage Civic Academy content.

- Create modules
- Update modules
- Delete modules
- Create lessons
- Update lessons
- Delete lessons
- Protected admin routes
- Validation before deleting modules containing lessons

---

## 🛠️ Technology Stack

### Frontend

- React.js
- React Router
- Axios
- CSS
- Vite

### Backend

- Node.js
- Express.js
- REST APIs
- JWT
- bcrypt
- Node Cron

### Database

- MongoDB Atlas
- MongoDB
- Mongoose

### External Services

- NewsAPI

### Development Tools

- Git
- GitHub
- Postman
- Visual Studio Code

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │      + Vite         │
                    └──────────┬──────────┘
                               │
                         REST API / Axios
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Express / Node.js │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
       ┌────────────┐   ┌────────────┐   ┌────────────┐
       │    Auth    │   │   Civic    │   │   Academy  │
       │   System   │   │  Updates   │   │   System   │
       └────────────┘   └─────┬──────┘   └────────────┘
                              │
                              ▼
                         ┌──────────┐
                         │ NewsAPI  │
                         └──────────┘
                              
                    ┌─────────────────────┐
                    │    MongoDB Atlas    │
                    └─────────────────────┘
```

---

## 🔄 Civic Updates Data Flow

```text
NewsAPI
   │
   ▼
Node.js News Job
   │
   ▼
Filter Relevant Updates
   │
   ▼
Check Existing Records
   │
   ▼
MongoDB
   │
   ▼
Express REST API
   │
   ▼
React Civic Updates Page
   │
   ▼
Community Discussion
```

The application stores fetched updates in MongoDB rather than depending on the external API every time a user opens the page. This allows previously fetched updates to remain available and also demonstrates
