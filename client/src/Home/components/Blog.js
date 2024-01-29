import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FaCloudversify } from "react-icons/fa6";
const Blog = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [favoriteBlogs, setFavoriteBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getAllBlogs/getBlogs");
      const allBlogs = response.data.data;
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const favoriteBlogs = allBlogs.filter((item) => item.toggleFavourite === 1);
      setAllBlogs(allBlogs); 
      setFavoriteBlogs(storedFavorites.length ? storedFavorites : favoriteBlogs); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []); 
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteBlogs));
  }, [favoriteBlogs]);
    
    const updateBlogStatus =async(id)=>{
     try {
      const data={
        toggleFavourite:1
      }
      const response = await axios.put(`http://localhost:4000/updateStatus/updateBlogStatus/${id}`,data);
      console.log(response.data);
      window.location.reload();
     } catch (error) {
      console.log(error);
     }
    }
    const revokeBlogStatus =async(id)=>{
      try {
       const data={
         toggleFavourite:0
       }
       const response = await axios.put(`http://localhost:4000/updateStatus/updateBlogStatus/${id}`,data);
       console.log(response.data);
       window.location.reload();
      } catch (error) {
       console.log(error);
      }
     }
  return (
    <>
    
    
    <div className='m-auto'>
      <p className='text-3xl font-semibold'>All blogs</p>
        {allBlogs.map((item,index)=>{
            return(
                <div className="card border-b-4 grid-cols-2 w-max p-4 justify-between m-2">
                    <div className="text-left mb-3">
                    <p className='text-2xl font-semibold'>Title: <FaCloudversify/> {item.title}</p>
                     
                    <h3 className='text-1xl'>Description: {item.body}</h3>
                    
                    </div>
                     <div>
                     <button className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1"
                    onClick={()=>updateBlogStatus(item.id)}
                    >Add to favourites</button>
                     <button className="mx-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1"
                    
                    ><Link to={`/postDetail/${item.id}`}>View Details</Link></button>
                    </div>
                    </div>
            )
        })}
         
        
    </div>
    <div className="card border-b-2 w-max p-6 h-max mt-4">
      <p className='text-4xl'>Favourites</p>
      {favoriteBlogs.length>0 && favoriteBlogs.map((item)=>{
        return(
          <div className='m-4'>
          
          <div className='flex flex-col text-3xl font-semibold'>
          <p>Title:</p>
          <FaCloudversify/>
          {item.title} 
          </div>
          <div>
          {favoriteBlogs.length>0 && 
          <div>
          <button 
          className=  "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1"
          onClick={()=>revokeBlogStatus(item.id)}>
            Remove Favourites
          </button>
          <button className="mx-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1"
                    
                    ><Link to={`/postDetail/${item.id}`}>View Details</Link></button>
          </div>
          }
        </div>
        </div>
        )
      })}
    </div>
    </>
  )
}

export default Blog