import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:5000/api',
    withCredentials:true
});

let currentToken=null;

export function setAuthToken(token){
    currentToken=token;
}

api.interceptors.request.use((config)=>{
    if(currentToken){
        config.headers.Authorization=`Bearer ${currentToken}`
    }
    return config;
})
export default api;


