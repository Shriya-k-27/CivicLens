import {useAuth} from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Dashboard(){
    const {logout}=useAuth();
    return (
        <div>
        <h1>Welcome to your CivicLens Dashboard</h1>
        <Link to="/academy">Civic Academy</Link>
        <br/>
        <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard;

