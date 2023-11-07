const Todo=require("../models/Todo");

exports.gettodobyid=async(req,res)=>{
    try{
            //extract todo by id
            const idtodo = req.params.id;
            const todo= await Todo.findById({_id: idtodo})
        
            //response
            if(!todo)
            {
                return res.status(404)
                .json({
                    success:false,
                    message:"No data found",
                });
            }
            
            res.status(200)
            .json({
                success:true,
                data:todo,
                message:`Todo ${idtodo} data successfully fetched`,
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