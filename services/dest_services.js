import DestModel from "../models/destination.js";
import ResModel from "../models/reservation.js";
export async function getAlldest(){
    const destinations=await DestModel.find();
    return destinations;
}

export async function adddest(destination){
    return await DestModel.create(destination);
    
}

export async function getdestById(idD){
    return await DestModel.findById(idD);
}

export async function deletedest(idD){
    return await DestModel.findByIdAndRemove(idD);
}

export async function updateDest(destinationId, updateData) {
        const updatedDestination = await DestModel.findByIdAndUpdate(
            destinationId,
            updateData,
            { new: true }
        );

        if (!updatedDestination) {
            throw new Error("Destination not found.");
        }

        const { prixParNuit } = updatedDestination;

        const reservations = await ResModel.find({ destinationId });

        const updatePromises = reservations.map(async (reservation) => {
            const startDate = new Date(reservation.dateDebut);
            const endDate = new Date(reservation.dateFin);
            const numNights = (endDate - startDate) / (1000 * 60 * 60 * 24); 

            const prixTotal = numNights * prixParNuit; 

            return ResModel.findByIdAndUpdate(reservation._id, { prixTotal }, { new: true });
        });

        await Promise.all(updatePromises);

        return updatedDestination;
    }