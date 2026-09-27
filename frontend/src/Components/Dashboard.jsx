import {useAuth} from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api/axios';

function Dashboard(){
    const {user,logout}=useAuth();

    const [stats, setStats]=useState(null);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{
    async function fetchStats(){
        try{
            const res=await api.get('/progress/stats');
            setStats(res.data);
        }catch(err){
            setError(
                err.response?.data?.message||
                'Failed to load progress'
            );
        }finally{
            setLoading(false);
        }
    }
    fetchStats();
    },[]);

    if(loading){return <div>Loading progress...</div>}
    if(error){return <div>{error}</div>}

    return (
        <div>
        <h1>Welcome to your CivicLens Dashboard</h1>
        <h2>Progress</h2>
        <p>{stats.completedCount} / {stats.totalLessons} lessons completed</p>
        <progress value={stats.percentage} max="100">{stats.percentage}%</progress>
        <p>{stats.percentage}% complete</p>

        <h2>Badges</h2>
        <p>Badges: {stats.badges.length>0? stats.badges.join(', '):
            'No badges yet'}</p>
        <br/>
        <Link to="/academy">Civic Academy</Link>
        <br/>
        <Link to="/profile">Profile</Link>
        <br/>
        {user?.role==='admin' && 
        (<>
        <Link to="/admin">Admin</Link>
        <br/></>)}
        <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard;

