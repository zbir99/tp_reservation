import * as resService from "../services/res_services.js";

export async function getAllreservations(req,res){
    try {
    const reservations=await resService.getAllres();
    res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
        }
}

export async function addreservation(req, res) {
    try {
        const reservation = await resService.addres(req.body);
        res.status(201).json(reservation);
        } catch (error) {
            res.status(500).json({ message: error.message });
            }
}

export async function deletereservationById(req,res){
    try {
    const reservation=await resService.deleteres(req.params.id);
    res.status(204).json({ message: `The reservation with id: ${req.params.id} has been deleted`, reservation });
    } catch (error) {
        res.status(500).json({ message: error.message });
        }
}

export async function getreservationById(req,res){
    try {
    const reservation=await resService.getresById(req.params.id);
    res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
        }
}

export async function updatereservation(req,res){
    try {
    const reservation=await resService.updateres(req.params.id,req.body);
    res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
        }
}

