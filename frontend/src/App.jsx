import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'
import Dashboard from './Components/Dashboard'
import './App.css'
import RegisterForm from './Components/RegisterForm'
import LoginForm from './Components/LoginForm'

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    </Routes>
    </>
  )
}

export default App
