import { useEffect, useState } from "react"
import { useLocation,Link } from "react-router-dom"
import axios from "axios"
import "./singlePost.css"
import { useContext } from "react"
import { Context } from "../../context/Context"

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]

  const [post,setPost] = useState({})

  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [updateMode,setUpdateMode] = useState(false)

  useEffect(() => {
    const getPost  = async ()=>{
      const res = await axios.get("/posts/"+path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }
    getPost()
  }, [path])

  const PF = "http://localhost:4000/images/"

  const {user} = useContext(Context)

  const handleDelete= async ()=>{
    try{
      await axios.delete("/posts/"+path,{data:{username: user.username}})
      window.location.replace("/")
    }catch(err){}
  }

  const handleUpdate = async ()=>{
    try{
      await axios.put("/posts/"+path,{username: user.username,title,desc})
      setUpdateMode(false)
    }catch(err){}
  }
  
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (<img className="singlePostImage" src={PF+post.photo} alt="" />)}
            
            {updateMode? (<input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=> setTitle(e.target.value)}/>):(<h1 className="singlePostTitle">
                {title}
                {(post.username === user?.username) && (<div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={()=> setUpdateMode(true)}></i>
                <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                </div>
                )}
            </h1>)}
            
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>
                  <Link className="link" to={`/?user=${post.username}`}>{post.username}</Link>
                  </b></span>
                <span className="singlePostDate">
                  {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            
            {updateMode? (<textarea name="" id="" value={desc} className="singlePostDescInput" onChange={(e)=> setDesc(e.target.value)}></textarea>):(<p className="singlePostDesc">
              {desc}
            </p>)}

            {updateMode && <button className="singlePostButton" onClick={handleUpdate}>update</button>}
            
        </div>
    </div>
  )
}
