const router  = require('express').Router();
const connection = require('../connection');
router.post('/insertComment',async(req,res)=>{
    try {
        const {blogId,name,email,body} = req.body;
    const query = 'INSERT INTO comments (blogId,name,email,body) values (?,?,?,?)'
    connection.query(query,[blogId,name,email,body],(err,result)=>{
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