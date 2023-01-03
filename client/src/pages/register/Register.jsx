import "./register.css"
import {Link} from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Register() {
  const [username,setUsername] = useState([])
  const [password,setPassword] = useState([])
  const [email,setEmail] = useState([])
  const [error,setError] = useState([])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try{
      const res = await axios.post("/auth/register",{
        username,email,password
      })
      console.log(res)
      {res.data && window.location.replace("/login")}
    }catch(err){
      console.log(err)
      setError(true)
    }
    
  }

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
            <input type="text" placeholder="Enter your username" 
            onChange={e=>setUsername(e.target.value)}
            />
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter your email" 
            onChange={e=>setEmail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input type="password" placeholder="password"
            onChange={e=>setPassword(e.target.value)} 
            />
            <button type="submit">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">Login</Link>
        </button>
        {error===true && (<span className="error">something went wrong !!</span>)}
        
    </div>
  )
}
