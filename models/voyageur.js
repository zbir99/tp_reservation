import mongoose from "mongoose";

const voySchema=new mongoose.Schema({
    nom:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    telephone:{type:String,required:false}
});

const VoyModel=mongoose.model("voyageur",voySchema);

export default VoyModel;