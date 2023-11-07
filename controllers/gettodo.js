const Todo=require("../models/Todo");

exports.gettodo=async(req,res)=>{
    try{
        //fetch all data;
            const todos = await Todo.find({});
        
            //response
            res.status(200)
            .json({
                success:true,
                data:todos,
                message:"Entire Todo data is fetched",
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

