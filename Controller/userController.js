import { useReducer } from "react";
import userModel from "../Models/userModel.js";

export const updateUserController = async (req,res,next) =>{
    const {firstName, lastName, email , location } = req.body;
    if (!email || !firstName || !lastName || !location){
        return next("provide all fields")
    }
    const user =await userModel.findOne({_id:req.user.userId})
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.location = location;

    user.save();
    const token = user.createJWT();
    res.status(200).json({
        user,
        token
    })
}



