const {Wine}=require("../Model/Wines.model")

const WineController={
    getAll:async(req,res)=>{
        try {
            const target= await Wine.find({})
            res.send(target)
            
        }
        catch (error) {
           res.send("item is not fount") 
        }
    },
    getById:async(req,res)=>{
        try {
            const {id}=req.params
            const wine=await Wine.findById(id)
            res.send(wine)            
        } catch (error) {
           res.send("item is not fount") 
        }
    },
    Post:async(req,res)=>{
        try {
            const {name,price,desc,image}=req.body
            const NewProduct=new Wine({name,price,desc,image})
            await NewProduct.save()
            res.send(NewProduct)
            
        } catch (error) {
           res.send("item is not fount") 
        }
    },
    delete:async(req,res)=>{
        try {
            const {id}=req.params
             await Wine.findByIdAndDelete(id)
             res.send("deleted")            
        } catch (error) {
           res.send("item is not fount") 
        }
    },
}
module.exports={WineController}