import { createContext,useContext,useEffect,useReducer } from "react"
import api from '../api/axios'

const AuthContext=createContext(null);

const initialState={
    user:null, 
    accessToken:null, 
    isLoading:true 
}

function authReducer(state,action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return{
                ...state,user:action.payload.user,
                accessToken:action.payload.accessToken,isLoading:false
            }
        case 'LOGOUT':
            return{
                ...state,user:null,accessToken:null,isLoading:false
            }
        case 'AUTH_CHECK_DONE':
            return{
                ...state,isLoading:false
            }
        default:
            return state;
    }
}

export function AuthProvider({children}){

    const[state,dispatch]=useReducer(authReducer,initialState)

    useEffect(()=>{
        async function checkAuth(){
            try{
                const refreshResponse=await api.post('/auth/refresh',{})

                const accessToken=refreshResponse.data.accessToken;
                
                const meResponse=await api.get('/auth/me',
                    {
                        headers:{Authorization: `Bearer ${accessToken}`},
                    }
                )

                dispatch(
                    {
                        type:'LOGIN_SUCCESS',
                        payload:{user: meResponse.data.user,accessToken}
                    }
                );
                
            }catch(err){

                dispatch({type:'AUTH_CHECK_DONE'})
            }
        }
        checkAuth();
    }, [])

    async function login(email,password){
    const response=await api.post('/auth/login',
        {email,password},
        {withCredentials:true}
    )
    const {user,accessToken}=response.data;

    dispatch({type:'LOGIN_SUCCESS',
        payload:{user,accessToken}
    })
    return user;
}
async function logout(){
    try{
        await api.post('/auth/logout',{},{withCredentials:true})
    }finally{
        dispatch({type:'LOGOUT'})
    }
    
}
    return(
        <AuthContext.Provider value={{
            user:state.user,accessToken:state.accessToken,
            isLoading:state.isLoading,login,logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth(){
    return useContext(AuthContext);
}

