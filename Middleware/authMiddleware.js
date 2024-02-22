import JWT from 'jsonwebtoken';

const userAuth = async (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return next("auth failed")
    }
    const token = authHeader.split(' ')[1];
    try{
        const payload = JWT.verify(token, process.env.JWT_SECRET)
        req.user = {userId:payload.userId}
        return next()
    }catch(err){
        return next("auth failed");
    }
}

export default userAuth;