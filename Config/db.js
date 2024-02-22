import mongoose from 'mongoose';

const connectDB = async () =>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_LOCAL_URL);
        console.log(`connected to mongodb server`);
    }
    catch(err){
        console.log(err);
    }
}
export default connectDB;