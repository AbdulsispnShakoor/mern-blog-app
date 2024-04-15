import mongoose from "mongoose";

export const dbConnection = async () =>{
    try {
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log("Connect to database")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}