const router  = require('express').Router();
const connection = require('../connection');

router.put('/updateComment/:id',async(req,res)=>{
    try {
        const {name,email,body} = req.body;
        const {id} = req.params;
        const updateQuery = "UPDATE comments SET name=?,email=? ,body=? WHERE id=?"
        connection.query(updateQuery,[name,email,body,id],(error,result)=>{
            if(error){
                console.log(error);
                res.status(500).json({msg:"Internal server error"});
            }else{
              res.status(200).json({data:result});
            }
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:"An error occured"})
    }
})

module.exports = router;