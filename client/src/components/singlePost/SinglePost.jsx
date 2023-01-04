import { useEffect, useState } from "react"
import { useLocation,Link } from "react-router-dom"
import axios from "axios"
import "./singlePost.css"

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]

  const [post,setPost] = useState({})

  useEffect(() => {
    const getPost  = async ()=>{
      const res = await axios.get("/posts/"+path)
      setPost(res.data)
    }
    getPost()
  }, [path])

  const PF = "http://localhost:4000/images/"
  
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (<img className="singlePostImage" src={PF+post.photo} alt="" />)}
            
            <h1 className="singlePostTitle">
                {post.title}
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>
                  <Link className="link" to={`/?user=${post.username}`}>{post.username}</Link>
                  </b></span>
                <span className="singlePostDate">
                  {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className="singlePostDesc">
              {post.desc}
            </p>
        </div>
    </div>
  )
}
