import { useState } from 'react'
import axios from 'axios'

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
            const response=await axios.post(
                "http://localhost:5000/api/auth/login",
                {email,password},{withCredentials:true}
            )
            console.log(response.data);
            console.log("Login successful!");
            
        }catch(err){
            console.log(err.response?.data || err.message);
        }
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="emailInp">Email: </label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="emailInp"/>

        <br/><br/>

        <label htmlFor="passInp">Password: </label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="passInp"/>

        <br/><br/>
        <button type="submit">Login</button>

      </form>
    </>
  )
}

export default LoginForm
