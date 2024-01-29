import React from 'react'
import Blog from './components/Blog'

const Home = () => {
  return (
    <>
     <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 h-max font-Inter mb-6 p-3">
     <p className='text-4xl text-white text-center'>This is the blog Application</p>
      </div> 
    
    <div className="grid grid-cols-2 m-auto font-Inter">
    
     <Blog/>
    </div>
    </>
  )
}

export default Home