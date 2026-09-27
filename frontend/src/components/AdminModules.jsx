import {useEffect,useState} from 'react';
import api from '../api/axios';

function AdminModules(){
    const [modules,setModules]=useState([]);

    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [order,setOrder]=useState('');

    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const [creating,setCreating]=useState(false);

    useEffect(()=>{fetchModules();},[]);

    async function fetchModules(){
        try{
            const response=await api.get('/modules');
            setModules(response.data.modules);
        }catch(err){
            setError(err.response?.data?.message||'Failed to load modules');
        }finally{
            setLoading(false);
        }
    }

    async function handleCreate(event){
        event.preventDefault();

        setCreating(true);
        setError(null);

        try{
            const response=await api.post('/modules',{title,description,order:Number(order)});

            setModules((currentModules)=>[...currentModules,response.data.module]);

            setTitle('');
            setDescription('');
            setOrder('');
        }catch(err){
            setError(err.response?.data?.message||'Failed to create module');
        }finally{
            setCreating(false);
        }
    }

    async function handleDelete(moduleId){
        const confirmed=window.confirm('Are you sure you want to delete this module?');

        if(!confirmed){return}

        try{
            await api.delete(`/modules/${moduleId}`);

            setModules((currentModules)=>
                currentModules.filter((m)=>m._id!==moduleId));

        }catch(err){
            setError(err.response?.data?.message||'Failed to delete module');
        }
    }

    if(loading){return <div>Loading modules...</div>}

    return(
        <div>
            <h1>Manage Modules</h1>
            {error && <p>{error}</p>}

            <h2>Create Module</h2>

            <form onSubmit={handleCreate}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                </div>
                <br/>

                <div>
                    <label>Description: </label>
                    <textarea value={description} onChange={(e)=>setDescription(e.target.value)} required/>
                </div>
                <br/>

                <div>
                    <label>Order: </label>
                    <input type="number" value={order} onChange={(e)=>setOrder(e.target.value)} required/>
                </div>
                <br/>

                <button type="submit" disabled={creating}>{creating?'Creating...':'Create Module'}</button>
            </form>
            <hr/>

            <h2>Existing Modules</h2>

            {modules.length===0?(<p>No modules found.</p>):(
                <ul>
                    {modules.map((m)=>(
                        <li key={m._id}>
                            <strong>{m.title}</strong> {' - '} {m.description} {' - Order: '} {m.order} {' '}
                            <button onClick={()=>handleDelete(m._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AdminModules;