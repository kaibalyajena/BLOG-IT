import "./login.css"

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
        <button className="loginRegisterButton">register</button>
    </div>
  )
}
