import mongoose from "mongoose";

export const connectDB = async () => {
    const MONGO_URI = `mongodb+srv://niveditamitra65:V6TWPWU2ZB17XW1K@cluster0.lfoxryh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
    await mongoose.connect(MONGO_URI).then(() => {
        console.log("DB connected");
    })
}