const router  = require('express').Router();
const connection = require('../connection');
router.post('/insertBlog',async(req,res)=>{
    try {
        const {userId,title,body} = req.body;
    const query = 'INSERT INTO blog (userId,title,body,toggleFavourite) values (?,?,?,0)'
    connection.query(query,[userId,title,body],(err,result)=>{
        if(err){
            console.error(err);
            res.status(500).json({error:"Internal Server Error"})
        }else{
            res.status(200).json({msg:"Data Insertion Successfull",data:result})
        }
    }) 
    } catch (error) {
        console.error(error);
        res.status(404).json({"err":error})
    }
   
})

module.exports=router