const express=require("express");
const router = express.Router();

//import contoller
const {createTodo}=require("../controllers/createTodo");
const {gettodo}=require("../controllers/gettodo");
const {gettodobyid}=require("../controllers/gettodobyid");
const {updatetodobyid}=require("../controllers/updatetodobyid");
const {deletetodo}=require("../controllers/deletetodo");


router.post("/createTodo",createTodo);
router.get("/gettodo",gettodo);
router.get("/gettodobyid/:id",gettodobyid);
router.put("/updatetodobyid/:id",updatetodobyid);
router.delete("/deletetodo/:id",deletetodo);


module.exports=router;