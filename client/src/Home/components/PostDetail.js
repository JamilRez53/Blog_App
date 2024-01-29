import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaEnvelope } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { FaBurst } from "react-icons/fa6";
const PostDetail = () => {
    const id = useParams();
    const [blog,setBlog] = useState("");
    const [comment,setComments] = useState([]);
    console.log(id);
    const getPostDetail = async()=>{
        try {
            const response = await axios.get(`http://localhost:4000/getIndividualBlog/getBlog/${id.id}`);
            console.log(response.data);
            setBlog(response.data.data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
      getPostDetail();
    },[])
    const getCommentsOnPost = async()=>{
        try {
            const response = await axios.get(`http://localhost:4000/getCommentByID/getSingleComment/${id.id}`);
            console.log(response.data.data);
            setComments(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
     getCommentsOnPost();
    },[id])
  return (
    <div className="font-Inter">
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 h-max font-Inter mb-6 p-3">
    <p className='text-4xl text-white text-center'>See Your Posts who commented on it.</p>
     </div>
     <div className='border-b-2 w-screen h-max p-4 justify-between'>
     <p className='text-5xl'>{blog.title}</p>
     <p className='text-3xl'>{blog.body}....</p>
     </div>
     <div><p className="text-2xl p-3 font-semibold border-b-2">People who Commented on the post</p></div>
     <div className='m-2'>
    {comment.map((item)=>{
        return(
            <div className='card border-b-4 w-screen h-max p-4'>
            <p> <FaCircleUser/> {item.name}</p>
            <p>  <FaEnvelope/>{item.email}</p>
            <p className='text-left'><FaBurst/> {item.body}</p>
        </div>
        )
       
     
    })}
     </div>
    </div>
     
  )
}

export default PostDetail