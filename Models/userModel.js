import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

//schema
const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        require:[true,"enter first name"],
    },
    lastName:{
        type:String,
        requre:[true,"enter last name"],
    },
    email:{
        type:String,
        require:[true,"enter email"],
        validate:validator.isEmail,
    },
    password:{
        type:String,
        require:[true,"enter password"],
        minlength:[6,"password length should be greater than or equal to 6"],
        select:true
    },
    location:{
        type:String
    },
},
{timestamps:true}
);

//middleware
//arrow function is not working here that's why we are using normal function
userSchema.pre('save', async function(){
    if(!this.isModified)return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})

//compare password
userSchema.methods.comparePassword = async function(userPassword){
    const isMatch = bcrypt.compare(userPassword,this.password)
    return isMatch
}


//JSON WEBTOKEN
//arrow function is not working here that's why we are using normal function
userSchema.methods.createJWT = function(){
    return JWT.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:'1d'});
}
export default mongoose.model('User',userSchema);