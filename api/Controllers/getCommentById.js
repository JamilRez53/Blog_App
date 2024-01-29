const router  = require('express').Router();
const connection = require('../connection');

router.get("/getSingleComment/:blogId",async(req,res)=>{
    try {
        const {blogId} = req.params;
        console.log(blogId)
        const query = "SELECT * FROM comments WHERE blogId=?"
        connection.query(query,[blogId],(error,result)=>{
            if(error){
                console.log(error);
                res.status(500).json({msg:error})
            }else{
                res.status(200).json({data:result})
            }
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:"An error occured"});
    }
})

module.exports=router