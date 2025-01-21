const userModel =require("../models/userModel")
const jwt=require("../util/jwt");
const bcrypt=require("../util/bcrpyt")

const userSignUp= async(req,res)=>{

const {userName,password,phoneNumber,email} = req.body;


const lowerCase=(data)=>{
 return data.toLowerCase()
}

try{
   let result= await userModel.userSignUp(lowerCase(userName),password,lowerCase(phoneNumber),lowerCase(email),null);
   
   return res.status(200).json({status:"ok",msg:"user registered",redirect:true})
    
}catch(err){
        return res.status(300).json({status:"failed", msg:err.name+"/"+err.message})
}


}


const userLogin= async (req,res,next)=>{
        const {email,password} = req.body;
       
                try{
                        if(!email || !password ){
                                throw new Error("no empty values allowed in req body")
                        }

                        let result= await  userModel.userLogin(email)
                let authentication= await bcrypt.decryptUser(password,result.data.password)
                if(authentication){
                        
                        const token =jwt.generateToken(result.data.id,result.data.userName,result.data.email)
        
                        return res.status(200).json({token:token,code:1,status:"user authentication successfull", message:"password match"})

                }else{
                        return res.status(300).json({code:0,status:"user authentication failed",message:"incorrect password"})

                }

        }catch(err){
              

                        return res.json({err:err.name+err.message})
               

        }


}

module.exports={userSignUp,userLogin}