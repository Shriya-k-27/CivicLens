import {useEffect,useState} from 'react';
import api from '../api/axios';

function AdminLessons(){
    const [modules,setModules]=useState([]);
    const [selectedModuleId,setSelectedModuleId]=useState('');

    const [lessons,setLessons]=useState([]);

    const [title,setTitle]=useState('');
    const [order,setOrder]=useState('');
    const [content,setContent]=useState('');

    const [loadingModules,setLoadingModules]=useState(true);
    const [loadingLessons,setLoadingLessons]=useState(false);

    const [creating,setCreating]=useState(false);

    const [error,setError]=useState(null);

    useEffect(()=>{async function fetchModules(){
        try{
            const response=await api.get('/modules');
            const fetchedModules = response.data.modules;
            setModules(fetchedModules);
            if(fetchedModules.length>0){setSelectedModuleId(fetchedModules[0]._id)}
        }catch(err){
            setError(err.response?.data?.message||'Failed to load modules');
        }finally{ setLoadingModules(false)}
    }

    fetchModules();
},[]);

useEffect(()=>{
    if(!selectedModuleId){
        setLessons([]);
        return
    }

    async function fetchLessons(){
        setLoadingLessons(true);
        setError(null);

        try{
            const response=await api.get(`/modules/${selectedModuleId}/lessons`);
            setLessons(response.data.lessons);
        }catch(err){
            setError(err.response?.data?.message||'Failed to load lessons')
        }finally{setLoadingLessons(false)}
    }

    fetchLessons();
},[selectedModuleId]);

async function handleCreate(event){
    event.preventDefault();

    setCreating(true);
    setError(null);

    try{
        const response=await api.post('/lessons',{
            moduleId:selectedModuleId,title,
            order:Number(order),content});

        setLessons((currentLessons)=>[...currentLessons,response.data.lesson]);

        setTitle('');
        setOrder('');
        setContent('');
    }catch(err){
        setError(err.response?.data?.message||'Failed to create lesson')
    }finally{setCreating(false)}
}

async function handleDelete(lessonId){
    const confirmed=window.confirm('Are you sure you want to delete this lesson?')

    if(!confirmed){return}

    try{
        await api.delete(`/lessons/${lessonId}`);

        setLessons((currentLessons)=>
            currentLessons.filter((l)=>l._id!==lessonId))

    }catch(err){
        setError(err.response?.data?.message||'Failed to delete lesson')
    }
}

if(loadingModules){return <div>Loading Modules...</div>}
    return(
        <div>
            <h1>Manage Lessons</h1>
            {error && (<p>{error}</p>)}

            <h2>Select Module</h2>
            {modules.length===0?
            (<p>No modules found. Create a module first</p>):
            (
                <select value={selectedModuleId} onChange={(e)=>setSelectedModuleId(e.target.value)}>
                    {modules.map((m)=>(<option key={m._id} value={m._id}>{m.title}</option>))}
                </select>
            )
            }

            {selectedModuleId && (
                <>
                <h2>Create Lesson</h2>
                <form onSubmit={handleCreate}>
                    <div>
                        <label>Title: </label>
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                    </div>
                    <br/>

                    <div>
                        <label>Order: </label>
                        <input type="number" value={order} onChange={(e)=>setOrder(e.target.value)} required/>
                    </div>
                    <br/>

                    <div>
                        <label>Content: </label>
                        <textarea value={content} onChange={(e)=>setContent(e.target.value)} required/>
                    </div>
                    <br/>

                    <button type="submit" disabled={creating}>
                        {creating?'Creating':'Create Lesson'}
                    </button>
                </form>
                <hr/>

                <h2>Lessons</h2>
                {loadingLessons?(<p>Loading Lessons...</p>)
                :lessons.length===0?(<p>No lessons found for this module</p>)
                :(
                    <ul>
                        {lessons.map((l)=>(
                            <li key={l._id}>
                                <strong>{l.title}</strong> {' - Orded: '} {l.order} {' '}
                                <button onClick={()=>handleDelete(l._id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                )
                }
                </>
            )}

        </div>
    );
}

export default AdminLessons;