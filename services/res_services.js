import ResModel from "../models/reservation.js";
import DestModel from "../models/destination.js";
export async function getAllres(){
    const reservations=await ResModel.find();
    return reservations;
}


export async function getresById(idR){
    return await ResModel.findById(idR);
}

export async function deleteres(idR){
    return await ResModel.findByIdAndDelete(idR);;
}


export async function addres(reservation) {
    const { dateDebut, dateFin, nombrePersonnes, destinationId, voyageurId } = reservation;
    
    if (!dateDebut || !dateFin || !destinationId) {
        throw new Error("dateDebut, dateFin, and destinationId are required.");
    }
    
    const startDate = new Date(dateDebut);
    const endDate = new Date(dateFin);
    const numNights = (endDate - startDate) / (1000 * 60 * 60 * 24); 
    
    if (numNights <= 0) {
        throw new Error("dateFin should be after dateDebut.");
    }

        const destination = await DestModel.findById(destinationId);
        if (!destination) {
            throw new Error("Destination not found.");
        }

        const prixTotal = numNights * destination.prixParNuit;

        const newReservation = new ResModel({
            dateDebut,
            dateFin,
            nombrePersonnes,
            prixTotal,
            destinationId,
            voyageurId
        });

        return await newReservation.save();
}


export async function updateres(idR,reservation){
    const { dateDebut, dateFin, destinationId } = reservation;
    
    if (!dateDebut || !dateFin || !destinationId) {
        throw new Error("dateDebut, dateFin, and destinationId are required.");
    }
    
    const startDate = new Date(dateDebut);
    const endDate = new Date(dateFin);
    const numNights = (endDate - startDate) / (1000 * 60 * 60 * 24); 
    
    if (numNights <= 0) {
        throw new Error("dateFin should be after dateDebut.");
    }

        const destination = await DestModel.findById(destinationId);
        if (!destination) {
            throw new Error("Destination not found.");
        }

        const prixTotal = numNights * destination.prixParNuit;

        

        return await ResModel.findByIdAndUpdate(idR, {
            ...reservation,
            prixTotal, 
        },
        { new: true });
}

