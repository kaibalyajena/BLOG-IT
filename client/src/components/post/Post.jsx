import "./post.css"

export default function Post({post}) {
  return (
    <div className='post'>
      {post.photo && (<img className="postImage" src={post.photo} alt="post pic" />)}
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map(c=>(
                <span className="postCat">{c.name}</span>
              ))}
                
            </div>
            <span className="postTitle">{post.title}</span>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            <p className="postDesc">
              {post.desc}
            </p>
        </div>
    </div>
  )
}
