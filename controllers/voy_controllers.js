import * as voyService from "../services/voy_services.js";

export async function getAllvoyageurs(req,res){
    try{
    const voyageurs=await voyService.getAllvoy();
    res.status(200).json(voyageurs);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function addvoyageur(req,res){
    try{
    const voyageur =await voyService.addvoy(req.body);
    res.status(201).json(voyageur);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function deletevoyageurById(req,res){
    try{
    const voyageur=await voyService.deleteVoy(req.params.id);
    res.status(204).json({ message: `The voyageur with id: ${req.params.id} has been deleted`, voyageur });
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function getvoyageurById(req,res){
    try{
    const voyageur=await voyService.getVoyById(req.params.id);
    res.status(200).json(voyageur);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function updatevoyageur(req,res){
    try{
    const voyageur=await voyService.updateVoy(req.params.id,req.body);
    res.status(201).json(voyageur);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}