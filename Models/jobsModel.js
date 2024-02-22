import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
    company:{
        type: String,
        require: [true, "company name is require"]
    },
    position :{
        type:String,
        require: [true,"job position is require"],
        maxlength:100
    },
    status:{
        type:String,
        enum: ['pending','reject', 'interview'],
        default : 'pending'
    },
    workType:{
        type:String,
        enum:['full-time','part-time','internship','contract'],
        default:'full-time'
    },
    workLocation:{
        type:String,
        require:[true, " work location is required"],
        default:'Banglore'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

export default mongoose.model('Job',jobSchema);