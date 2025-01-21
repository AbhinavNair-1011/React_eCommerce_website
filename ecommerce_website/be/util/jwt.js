const jwt = require("jsonwebtoken");


const generateToken=(id,userName,email)=>{
    const key=process.env.JWT_KEY
    try{
        const token=  jwt.sign({userName,id,email},key)
        return token

    }catch(err){
        if(err){
            throw new Error (err)
        }
    }

    
}
const userValidation=(req,res,next)=>{

jwt.verify(token,key,(err,data)=>{
    if(err){
        return res.status(300).json({status:"failed",msg:"user not authorised"})
    }else{
        req.user.authorised=true;
        next()
    }
})


}

module.exports={generateToken,userValidation}