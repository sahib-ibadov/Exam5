const express=require("express")
const router=express.Router()
const {WineController}=require("../Controller/Wine.Controller")
router.get("/",WineController.getAll)
router.get("/:id",WineController.getById)
router.post("/",WineController.Post)
router.delete("/:id",WineController.delete)
module.exports=router