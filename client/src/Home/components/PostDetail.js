import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
    const id = useParams();
    console.log(id);
    const getPostDetail = async()=>{
        try {
            const response = await axios.get(`http://localhost:4000/getIndividualBlog/getBlog/${id.id}`);
            console.log(response.data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
      getPostDetail();
    },[])
    const getCommentsOnPost = async()=>{
        try {
            const response = await axios.get(`http://localhost:4000/getCommentByID/getSingleComment/${id.id}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
     getCommentsOnPost();
    },[id])
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 h-max font-Inter mb-6 p-3">
    <p className='text-4xl text-white text-center'>See Your Posts who commented on it.</p>
     </div>
     <div>

     </div>
    </div>
     
  )
}

export default PostDetail