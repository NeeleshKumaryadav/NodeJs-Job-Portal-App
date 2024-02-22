import userModel from "../Models/userModel.js";

export const authController = async (req, res, next) => {

    const { firstName, lastName, email, password } = req.body;
    //validate
    if (!firstName) {
        return next('provide firstname');
    }
    if (!lastName) {
        return next('provide lastname');
    }
    if (!email) {
        return next('provide email');
    }
    if (!password) {
        return next('provide password');
    }

    const existingUser = await userModel.findOne({ email })
    if (existingUser) {
        return next("Email already register");
    }
    const user = await userModel.create({ firstName, lastName, email, password })
    //token
    const token = user.createJWT();
    res.status(201).send({
        success: true,
        message: 'user Created successfully!',
        user:{
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            location:user.location
        },
        token
    })
}


export const loginController =async (req,res,next)=>{
    const {email,password} = req.body;
    //validation
    if (!email || !password){
        return next("please provide all details")
    }
    //find email
    const user =await userModel.findOne({email})
    if(!user){
        return next("invalid uesrname or pasword")
    }
    //comapre password
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return next("invalid uesrname or pasword")
    }
    const token = user.createJWT();
    res.status(200).json({
        success:true,
        message:"login successfully",
        user:{
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            location:user.location
        },
        token
    })
}