import { useEffect,useState } from "react"
import {useParams} from 'react-router-dom'
import api from '../api/axios'

function LessonDetail(){

    const {lessonId}=useParams();
    const [lesson,setLesson]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    const [completing, setCompleting] = useState(false);
    const [completionResult, setCompletionResult] = useState(null);

    useEffect(()=>{
        async function fetchLesson(){
            try{
                const response=await api.get(`/lessons/${lessonId}`)
                setLesson(response.data.lesson)
            }catch(err){
                setError(err.response?.data?.message||'Lesson not found')
            }finally{
                setLoading(false)
            }
        }
        fetchLesson();
    },[lessonId])

    if(loading){return <div>Loading lesson...</div>}
    if(error){return <div>{error}</div>}
    async function handleComplete(){
        setCompleting(true);

        try{
            const res=await api.post(`/lessons/${lessonId}/complete`);
            setCompletionResult(res.data);
        }catch(err){
            setError(err.response?.data?.message || 'Failed to mark lesson as complete');
        }finally{
            setCompleting(false);
        }
    }

    return(
        <>
        <div>
            <h1>{lesson.title}</h1>
            <p>{lesson.content}</p>
        </div>
        {!completionResult?(
            <button onClick={handleComplete} disabled={completing}>
                {completing? 'Completing...':'Mark Complete'}
            </button>
        ):(<div>
            <p>Completed</p>
            <p>Streak: {completionResult.streakCount}</p>
            <p>Badges: {completionResult.badges.join(', ')}</p>
        </div>)}
        </>
    )
}

export default LessonDetail