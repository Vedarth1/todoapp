const Todo=require("../models/Todo");

exports.updatetodobyid=async(req,res)=>{
    try{
            //extract todo by id
            // const idtodo = req.params.id;
            // const todo= await Todo.findById({_id: idtodo})

            //another way of fetching id;
            const {id}=req.params;
            const {title,description}=req.body;

            const todo=await Todo.findByIdAndUpdate(
                {_id:id},
                {title,description,updateAt: Date.now()},
            )
        
            //response
            res.status(200)
            .json({
                success:true,
                data:todo,
                message:"update successfully",
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