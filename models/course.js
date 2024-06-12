const mongoose =require("mongoose")
const schema = mongoose.Schema(
    {
        "coursetitle":{type:String,required:true},
        "coursedescribtion":{type:String,required:true},
        "coursedate":{type:String,required:true},
        "courseduration":{type:String,required:true},
        "coursevenue":{type:String,required:true},
        "coursetrainername":{type:String,required:true}
    }
)
let coursemodel=mongoose.model("course",schema);
module.exports={coursemodel}