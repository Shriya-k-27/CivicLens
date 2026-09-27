import { useState,useEffect } from "react";
import api from '../api/axios'

function Profile(){
    const [user,setUser]=useState(null);
    const [stats,setStats]=useState(null);

    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        async function fetchProfile(){
            try{
                const userResponse=await api.get('/auth/me');
                const statsResponse=await api.get('/progress/stats');

                setUser(userResponse.data.user);
                setStats(statsResponse.data);
            }catch(err){
                setError(err.response?.data?.message||'failed to load profile')
            }finally{
                setLoading(false)
            }
        }
        fetchProfile();
    },[])

    if(loading){return <div>Loading profile...</div>}
    if(error){return <div>{error}</div>}

    return(
        <div>
            <h1>My Profile</h1>

            <h2>Account Information</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Joined:</strong> {' '} {new Date(user.createdAt).toLocaleDateString()}</p>
            
            <h2>Learning Progress</h2>
            <p><strong>Lessons:</strong> {' '} {stats.completedCount} / {stats.totalLessons}</p>
            <p><strong>Progress:</strong> {stats.percentage}%</p>
            <p><strong>Current Streak:</strong> {' '} 
            {user.streakCount} day{user.streakCount !==1?'s':''}</p>

            <h2>Badges</h2>
            {user.badges.length>0?
            (<ul>{user.badges.map((b)=>(
                <li key={b}>{b}</li>
            ))}</ul>):
            (<p>No badges yet</p>)}
        </div>
    )
}
export default Profile