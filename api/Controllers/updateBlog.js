const router  = require('express').Router();
const connection = require('../connection');

router.put('/updateBlog/:id',async(req,res)=>{
    try {
        const {title,body} = req.body;
        const {id} = req.params;
        const updateQuery = "UPDATE blog SET title=?,body=? WHERE id=?"
        connection.query(updateQuery,[title,body,id],(error,result)=>{
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