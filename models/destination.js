import mongoose from "mongoose";

const destSchema=new mongoose.Schema({
    nom:{type:String,required:true},
    pays:{type:String,required:true},
    prixParNuit:{type:Number,required:true},
    Description:{type:String,required:false}
});

const DestModel=mongoose.model("destination",destSchema);

export default DestModel;