import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'
import Dashboard from './Components/Dashboard'
import './App.css'
import RegisterForm from './Components/RegisterForm'
import LoginForm from './Components/LoginForm'
import ModuleList from './Components/ModuleList'
import LessonList from './Components/LessonList'
import LessonDetail from './Components/LessonDetail'

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path="/academy" element={<ProtectedRoute><ModuleList/></ProtectedRoute>}/>
      <Route path="/academy/:moduleId" element={<ProtectedRoute><LessonList/></ProtectedRoute>}/>
      <Route path="/academy/lesson/:lessonId" element={<ProtectedRoute><LessonDetail/></ProtectedRoute>}/>
    </Routes>
    </>
  )
}

export default App
