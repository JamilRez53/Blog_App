const router  = require('express').Router();
const connection = require('../connection');
router.get('/getBlogs',async(req,res)=>{
    try {
        const query ="Select * from blog";
        connection.query(query,(err,result)=>{
            if(err){
                console.log(err);
                res.status(500).json({msg:"Internal Server error"})
            }
            else{
                res.status(200).json({msg:"Data Fetched Successfully",data:result})
            }
        })
    } catch (error) {
        res.status(404).json(error);
    }
})
module.exports=router