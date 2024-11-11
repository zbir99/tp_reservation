import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import destRouter from "./routes/dest_routes.js"
import resRouter from "./routes/res_routes.js"
import voyRouter from "./routes/voy_routes.js"
const app=express();
dotenv.config();
app.use(express.json());
app.use("/api/destinations",destRouter);
app.use("/api/reservations",resRouter);
app.use("/api/voyageurs",voyRouter);

app.get("/",(req,res)=>{
    res.send("<h1> Home Page </h1>");
});
mongoose.connect(process.env.DB_URL)
        .then(()=>{
            console.log("Connected to MongoDB");

            app.listen(process.env.PORT,()=>{
                console.log('Server is running on port ' + process.env.PORT);
            });
        })
        .catch((err)=>{
            console.log("Error connecting to MongoDB:",err);
        });
        