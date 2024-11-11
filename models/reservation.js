import mongoose from "mongoose";

const resSchema=new mongoose.Schema({
    dateDebut:{type:Date,required:true},
    dateFin:{type:Date,required:true},
    nombrePersonnes:{type:Number,required:true},
    prixTotal:{type:Number,default:0},
    destinationId:[{
        type:mongoose.Types.ObjectId,
        ref:"destination",
    }],
    voyageurId:[{
        type:mongoose.Types.ObjectId,
        ref:"voyageur"
    }]
});

const ResModel=mongoose.model("reservation",resSchema);

export default ResModel;