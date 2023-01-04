import "./login.css"
import {Link} from "react-router-dom"
import { useRef } from "react"
import { useContext } from "react"
import { Context } from "../../context/Context"
import axios from "axios"

export default function Login() {
  const userRef = useRef()
  const passwordRef = useRef()
  const {dispatch,isFetching} = useContext(Context)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
      const res = await axios.post("/auth/login",{
        username:userRef.current.value,
        password:passwordRef.current.value
      })
      dispatch({type:"LOGIN_SUCCESS",payload:res.data})
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"})
    }
  }

  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Enter your username" ref={userRef}/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="password" ref={passwordRef}/>
            <button type="submit" disabled={isFetching}>login</button>
        </form>
        <button className="loginRegisterButton">
          <Link to="/register" className="link">Register</Link>
        </button>
    </div>
  )
}
