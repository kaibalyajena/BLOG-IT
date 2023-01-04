import { useContext,useState } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import { Context } from "../../context/Context"
import "./settings.css"
import axios from "axios"

export default function Settings() {
  const {user,dispatch} = useContext(Context)
  const[file,setFile] = useState(null)
  const [username,setUsername] = useState(user.username)
  const [email,setEmail]= useState(user.email)
  const [password,setPassword]= useState("")
  const [success,setSuccess] = useState(false)
  const PF = "http://localhost:4000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    console.log(updatedUser)
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    } 
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      console.log(res)
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className='settings'>
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label htmlFor="">Profile Pic</label>
          <div className="settingsPP">
            <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=> setFile(e.target.files[0])}/>
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder={user.username} onChange={(e)=>{setUsername(e.target.value)
          }}/>
          <label htmlFor="">Email</label>
          <input type="text" placeholder={user.email} onChange={(e)=>{setEmail(e.target.value)
          }}/>
          <label htmlFor="">Password</label>
          <input type="text" onChange={(e)=>{setPassword(e.target.value)
          }}/>
          <button className="settingsSubmit" type="submit">Update</button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
