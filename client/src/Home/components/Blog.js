import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Blog = () => {
    const[blog,setBlog] = useState([]);
    const getBlogs = async()=>{
      try {
        const response = await axios.get("http://localhost:4000/getAllBlogs/getBlogs");
        console.log(response.data.data);
        setBlog(response.data.data); 
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
        getBlogs()
    },[]);
    
  return (
    <div>
        {blog.map((item,index)=>{
            return(
                <div className="card border-b-4 grid-cols-2 w-3/4 justify-between m-2">
                    <div className="text-left">
                    <h3>Title:</h3>
                    <p>{item.title}</p> 
                    <h3>Description</h3>
                    <p>{item.body}</p>
                    </div>
                     <div>
                     <button className="justify-center"
                    onClick={()=>{}}
                    >Add to favourites</button>
                    </div>
                    </div>
            )
        })}
         
        
    </div>
  )
}

export default Blog