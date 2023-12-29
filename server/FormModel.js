const {Schema,models,model} = require('mongoose');

const FormSchema=new Schema({
    name:{
        type:String,
        required:[true, "name is require"],
        unique:[true,"name already exist"]
    },
    email:{
        type:String,
        required:[true, "name is required"],
        unique:[true,"name already exist"]
    },
    message:{
        type:String,
        required:[true,"message is required"]
    }
},{timestamps:true})

const Form=models.Form || model("Form", FormSchema);

module.exports=Form;