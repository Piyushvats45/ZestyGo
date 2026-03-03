import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://zestygo:zestygo@cluster0.43uljde.mongodb.net/zestygo').then(()=>console.log("Database connected"))
}