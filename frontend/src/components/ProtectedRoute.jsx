import {useAuth} from "../context/AuthContext"
import {Navigate} from "react-router-dom"

function ProtectedRoute({children}){
    const{user,isLoading}=useAuth()

    if(isLoading){
        return <div>Checking authentication...</div>
    }
    if(!user){
        return <Navigate to="/login" replace/>
    }
    return children;
}
export default ProtectedRoute;