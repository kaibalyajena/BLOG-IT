import "./login.css"
import {Link} from "react-router-dom"

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter your email" />
            <label htmlFor="">Password</label>
            <input type="text" placeholder="password" />
            <button>login</button>
        </form>
        <button className="loginRegisterButton">
          <Link to="/register" className="link">Register</Link>
        </button>
    </div>
  )
}
