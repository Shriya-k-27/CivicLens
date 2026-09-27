import { useEffect,useState } from "react"
import {Link,useParams} from 'react-router-dom'
import api from '../api/axios'

function LessonList(){

    const {moduleId}=useParams();
    const [lessons,setLessons]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        async function fetchLessons(){
            try{
                const response=await api.get(`/modules/${moduleId}/lessons`)
                setLessons(response.data.lessons)
            }catch(err){
                setError(err.response?.data?.message||'failed to load lessons')
            }finally{
                setLoading(false)
            }
        }
        fetchLessons();
    },[moduleId])

    if(loading){return <div>Loading lessons...</div>}
    if(error){return <div>{error}</div>}
    return(
        <>
        <h1>Lessons</h1>
        <div>
            <ul>
                {lessons.map((l)=>(
                    <li key={l._id}>
                        <Link to={`/academy/lesson/${l._id}`}>{l.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default LessonList