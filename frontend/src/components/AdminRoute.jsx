import {Navigate} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

function AdminRoute({children}){
    const {user,isLoading}=useAuth();

    if(isLoading){
        return <div>Loading...</div>;
    }

    if(!user){
        return <Navigate to="/login" replace/>;
    }

    if(user.role!=='admin'){
        return <Navigate to="/dashboard" replace/>;
    }

    return children;
}

export default AdminRoute;