import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <img className="postImage" src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=400" alt="post pic" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">life</span>
                <span className="postCat">cinema</span>
            </div>
            <span className="postTitle">The old cinematic life</span>
            <span className="postDate">1 day ago</span>
            <p className="postDesc">
              this section is going to be for the post description the user can the write whatsoever description he likes for the post that he created this is just a mock one the real one will fetched from the mongodb database
              this section is going to be for the post description the user can the write whatsoever description he likes for the post that he created this is just a mock one the real one will fetched from the mongodb database
              this section is going to be for the post description the user can the write whatsoever description he likes for the post that he created this is just a mock one the real one will fetched from the mongodb database
            </p>
        </div>
    </div>
  )
}
