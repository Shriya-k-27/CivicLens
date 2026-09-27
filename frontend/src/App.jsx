import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import PoliticsToday from "./pages/PoliticsToday.jsx";
import KnowYourLeaders from "./pages/KnowYourLeaders.jsx";
import LeaderDetails from "./pages/LeaderDetails.jsx";
import Navbar from "./components/Navbar.jsx";
import LessonList from "./components/LessonList.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import LessonDetail from "./Components/LessonDetail.jsx";
import ModuleList from "./components/ModuleList.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import AdminHome from "./components/AdminHome.jsx";
import AdminModules from "./components/AdminModules.jsx";
import AdminLessons from "./components/AdminLessons.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* Public */}
        <Route path="/" element={<Home />} />

        <Route
          path="/civic-updates"
          element={<PoliticsToday />}
        />

        <Route
          path="/leaders"
          element={<KnowYourLeaders />}
        />

        <Route
          path="/leaders/:id"
          element={<LeaderDetails />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<LoginForm />}
        />

        <Route
          path="/register"
          element={<RegisterForm />}
        />

        {/* User */}
        <Route
          path="/civic-academy"
          element={
            <ProtectedRoute>
              <ModuleList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/academy"
          element={
            <ProtectedRoute>
              <ModuleList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/academy/:moduleId"
          element={
            <ProtectedRoute>
              <LessonList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/academy/lesson/:lessonId"
          element={
            <ProtectedRoute>
              <LessonDetail />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminHome />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/modules"
          element={
            <AdminRoute>
              <AdminModules />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/lessons"
          element={
            <AdminRoute>
              <AdminLessons />
            </AdminRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;