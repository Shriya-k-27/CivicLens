import {useAuth} from '../context/AuthContext';

function Dashboard(){
    const {logout}=useAuth();
    return (
        <>
        <h1>Welcome to your CivicLens Dashboard</h1>
        <button onClick={logout}>Logout</button>
        </>
    )
}

export default Dashboard;

