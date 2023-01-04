import "./topbar.css"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const {user,dispatch}=useContext(Context);

  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"})
  }

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li> 
          <li className="topListItem">
          <Link className="link" to="/">ABOUT</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user? <img className="topImage" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile"></img> :
        <ul className="topList">
          <li className="topListItem">
            <Link to="/register" className="link">REGISTER</Link>
          </li>
          <li className="topListItem" >
            <Link className="link" to="/login">LOGIN</Link>
          </li>

        </ul>}
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
