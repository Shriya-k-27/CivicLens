import { useEffect,useState } from "react"
import {Link} from 'react-router-dom'
import api from '../api/axios'

function ModuleList(){

    const [modules,setModules]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        async function fetchModules(){
            try{
                const response=await api.get('/modules')
                setModules(response.data.modules)
            }catch(err){
                setError(err.response?.data?.message||'failed to load modules')
            }finally{
                setLoading(false)
            }
        }
        fetchModules();
    },[])

    if(loading){return <div>Loading modules...</div>}
    if(error){return <div>{error}</div>}
    return(
        <>
        <h1>Civic Academy</h1>
        <div>
            <ul>
                {modules.map((m)=>(
                    <li key={m._id}>
                        <Link to={`/academy/${m._id}`}>{m.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default ModuleList