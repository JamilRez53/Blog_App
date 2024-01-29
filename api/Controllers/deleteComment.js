const router  = require('express').Router();
const connection = require('../connection');

router.delete('/deleteComment/:id',async(req,res)=>{
    const {id} = req.params;
    console.log(id);
    try {
        const deleteQuery = "DELETE FROM comments WHERE id=?"
        connection.query(deleteQuery,[id],(error,result)=>{
            if(error){
              console.log(error);
              res.status(500).json({msg:"Internal Server Error"});
            }else{
                if (result.affectedRows > 0) {
                    res.json({ message: "Data deleted successfully" });
                  } else {
                    res.status(404).json({ error: "Data not found for deletion" });
                  }
            }
        })
    } catch (error) {
        console.log(error)
    }
})
module.exports = router