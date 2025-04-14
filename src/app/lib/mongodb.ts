import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI){
    throw new Error("Please define the MOONGODB_URI environment variable")
}

export const connectToDatabase = async ()=>{
    if(mongoose.connection.readyState >= 1){
        return mongoose.connection;
    }

    return mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as any);
};