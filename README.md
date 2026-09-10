# CIVICLENS
### An Interactive Platform for Civic & Political Literacy

CivicLens is a full-stack MERN web application developed as an **academic college project** to make civic and political information about India more accessible, organized, and engaging.

The platform brings together civic education, governance updates, information about Union Ministers, community discussions, and interactive polls in a single application.


## About the Project

CivicLens aims to simplify complex concepts related to the Indian Constitution, governance, democratic institutions, and civic participation through an interactive web platform.

The application is being developed using the **MERN stack** and follows a three-tier architecture consisting of the frontend, backend, and database layers.

The project is currently under active development. Some modules are implemented, while others are at different stages of development, including schema design, API development, frontend implementation, and integration.

## Main Modules

### 1. Civic Academy

Provides structured learning modules covering topics such as:

- Indian Constitution
- Fundamental Rights
- Parliament
- Prime Minister
- Union Ministries
- Judiciary
- Elections
- Federalism
- Local Government
- Public Policies

The module also includes learning progress tracking, daily streaks, and achievement badges.

### 2. Civic Updates

Provides selected governance and civic-related updates covering areas such as:

- Parliament
- Government policies
- Ministries
- Constitutional matters
- Elections
- Judiciary

Updates are designed to include reliable sources and references.

### 3. Know Your Leaders

Provides searchable profiles of Union Ministers, including information such as:

- Ministry
- Educational background
- Political experience
- Responsibilities
- Official references

### 4. Community Discussions

Allows registered users to participate in discussions related to Civic Updates and share their opinions in a structured environment.

### 5. Interactive Polls

Allows users to participate in polls related to civic topics and view poll results after voting.

### 6. Admin Dashboard

Provides administrators with tools to manage:

- Civic Academy lessons
- Civic Updates
- Union Minister profiles
- Discussions
- Polls
- User-generated content

Role-based authorization restricts administrative functionality to authorized administrators.

## Technology Stack

| Component | Technology |
|---|---|
| Frontend | HTML5, CSS, JavaScript, React.js |
| Routing | React Router DOM |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Authentication | JWT |
| Password Security | bcrypt.js |
| File Uploads | Multer |
| API Testing | Postman |
| Deployment | Vercel, Render, MongoDB Atlas |

## System Architecture

CivicLens follows a three-tier MERN architecture consisting of:

1. **Presentation Layer** — React.js frontend
2. **Application Layer** — Node.js and Express.js backend
3. **Database Layer** — MongoDB Atlas with Mongoose

The basic communication flow is:

```text
User
  |
  v
React.js Frontend
  |
  | REST APIs / Axios
  v
Node.js + Express.js Backend
  |
  | Mongoose
  v
MongoDB Atlas Database
