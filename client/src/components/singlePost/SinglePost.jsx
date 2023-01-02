import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImage" src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <h1 className="singlePostTitle">
                Single Post title is this
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>kaibalya</b></span>
                <span className="singlePostDate">1 day ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum deleniti earum, sapiente necessitatibus et, eos corporis itaque voluptatibus dicta non molestias quisquam voluptate perspiciatis hic! Nostrum itaque unde exercitationem repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, saepe nisi quisquam laudantium quae voluptate optio nihil. Officiis quis totam provident hic, nemo culpa iure quos praesentium nostrum? Illo, doloremque Lorem ipsum dolor sit amet consectetur adipisicing elit. Est culpa ipsum commodi nostrum, nam, adipisci unde fugiat voluptate suscipit officiis exercitationem incidunt ipsa quod autem id velit praesentium dolorem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis sequi saepe assumenda harum, eveniet molestias aperiam reiciendis quaerat maiores laboriosam doloribus minus, vero voluptatum esse nisi? Libero, sunt totam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate dolorum, error perferendis praesentium nesciunt commodi, nobis laboriosam exercitationem ipsum quae numquam quidem sequi minus nisi quasi fuga, ipsam voluptas.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, magni sint nesciunt asperiores in cupiditate eum repudiandae architecto animi! Officiis hic aliquam illo quae odit sed voluptates ullam voluptate ipsum!</p>
        </div>
    </div>
  )
}
