import * as destService from "../services/dest_services.js";

export async function getAlldestinations(req,res){
    try{
        const destinations=await destService.getAlldest();
        res.status(200).json(destinations);
    }catch(err){
        res.status(500).json({message:err.message})
}
}

export async function adddestination(req,res){
    try{
    const destination =await destService.adddest(req.body);
    res.status(201).json(destination);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function deletedestinationById(req,res){
    try{
    const destination=await destService.deletedest(req.params.id);
    res.status(204).json({ message: `The destination with id: ${req.params.id} has been deleted`, destination });
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function getdestinationById(req,res){
    try{
    const destination=await destService.getdestById(req.params.id);
    res.json(destination);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function updatedestination(req,res){
    try{
    const destination=await destService.updateDest(req.params.id,req.body);
    res.status(201).json(destination);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}