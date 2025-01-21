const brcypt =require("bcrypt");

const encryptUser= async (req,res,next)=>{
const password =req.body.password
   try{
   const hashedPassword = await brcypt.hash(password,3);
      req.body.password=hashedPassword
      next();
   }catch(err){
        return res.json({msg:err})
        

}

}

const decryptUser=async (password,hashedPassword)=>{
try{
let result = await brcypt.compare(password,hashedPassword)
return result
}catch(err){
return err
}

}

module.exports={encryptUser,decryptUser};

