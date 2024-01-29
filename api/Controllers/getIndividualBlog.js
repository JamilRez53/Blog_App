const router  = require('express').Router();
const connection = require('../connection');

router.get("/getBlog/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const query = "SELECT * FROM blog WHERE id=?"
        connection.query(query,[id],(error,result)=>{
            if(error){
                console.log(error);
                res.status(500).json({msg:error})
            }else{
                res.status(200).json({msg:"Data fetching done",data:result[0]})
            }
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:"An error occured"});
    }
})

module.exports=router