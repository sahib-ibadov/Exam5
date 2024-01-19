const mongoose=require("mongoose")
const Wine=mongoose.model("wine",new mongoose.Schema({
    name:String,
    desc:String,
    price:Number,
    image:String
}))
module.exports={Wine}