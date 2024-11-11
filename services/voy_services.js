import VoyModel from "../models/voyageur.js";

export async function getAllvoy(){
    const voyageurs=await VoyModel.find();
    return voyageurs;
}

export async function addvoy(voyageur){
    return await VoyModel.create(voyageur);
    
}

export async function getVoyById(idV){
    return await VoyModel.findById(idV);
}

export async function deleteVoy(idV){
    return await VoyModel.findByIdAndRemove(idV);
}

export async function updateVoy(idV,voyageur){
    return await VoyModel.findByIdAndUpdate(idV,voyageur);
}