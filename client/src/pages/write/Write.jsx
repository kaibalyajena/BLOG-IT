import { useState } from "react"
import "./write.css"

export default function  Write() {
  
  const[file,getFile] = useState(null)
  const [title,getTitle] = useState("")
  const [desc,getDesc]= useState("")

  return (
    <div className='write'>
        <img src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="writeImage"/>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput"><i class="writeIcon fa-solid fa-plus"></i></label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea className="writeInput writeText" placeholder="what are you upto ..." type="text"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
