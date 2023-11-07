const Todo=require("../models/Todo");

exports.deletetodo=async(req,res)=>{
    try{
            
            const {id}=req.params;
            await Todo.findByIdAndDelete(id);
        
            //response
            res.status(200)
            .json({
                success:true,
                message:"deleted successfully",
            });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            error:err.message,
        });
    }
}