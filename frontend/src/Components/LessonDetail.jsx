import { useEffect,useState } from "react"
import {useParams} from 'react-router-dom'
import api from '../api/axios'

function LessonDetail(){

    const {lessonId}=useParams();
    const [lesson,setLesson]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

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
    return(
        <>
        <div>
            <h1>{lesson.title}</h1>
            <p>{lesson.content}</p>
        </div>
        </>
    )
}

export default LessonDetail