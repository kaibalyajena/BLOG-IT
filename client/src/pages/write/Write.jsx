import { useState } from "react"
import "./write.css"
import axios from "axios"
import { useContext } from "react"
import { Context } from "../../context/Context"

export default function  Write() {
  
  const[file,setFile] = useState(null)
  const [title,setTitle] = useState("")
  const [desc,setDesc]= useState("")
  const {user} = useContext(Context)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const newPost = {
      username:user.username,
      title,
      desc
    }
    
    if(file){
      const data = new FormData()
      const filename = Date.now()+file.name
      data.append("name",filename)
      data.append("file",file)
      newPost.photo=filename;
      try{
        await axios.post("/upload",data)
      }catch(err){

      }
    }
    console.log(newPost)
    try{
      const res = await axios.post("/posts",newPost)
      window.location.replace("/post/"+res.data._id)
      console.log(res.data)
    }catch(err){}
  }
  return (
    <div className='write'>
      {file && (<img src={URL.createObjectURL(file)} alt="" className="writeImage"/>)}
        
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput"><i class="writeIcon fa-solid fa-plus"></i></label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=> setFile(e.target.files[0])}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
                <textarea className="writeInput writeText" placeholder="what are you upto ..." type="text" onChange={(e)=> setDesc(e.target.value)}></textarea>
            </div>
            <button className="writeSubmit" type="submit">Publish</button>
        </form>
    </div>
  )
}
