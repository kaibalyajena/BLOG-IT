import "./post.css"
import {Link} from "react-router-dom"

export default function Post({post}) {
  const PF = "http://localhost:4000/images/"
  return (
    <div className='post'>
      {post.photo && (<img className="postImage" src={PF+post.photo} alt="post pic" />)}
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map(c=>(
                <span className="postCat">{c.name}</span>
              ))}
            </div>
            <Link className="link" to={`/post/${post._id}`}><span className="postTitle">{post.title}</span></Link>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            <p className="postDesc">
              {post.desc}
            </p>
        </div>
    </div>
  )
}
