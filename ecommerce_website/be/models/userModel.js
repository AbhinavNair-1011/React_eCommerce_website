const db=require("../databaseConnection/databaseDetails")
const {v4 :uuidv4}=require("uuid")

const userSignUp=(userName,password,phoneNumber,email,refreshtoken)=>{

    
    return new Promise( (resolve,reject)=>{
        const query = `INSERT INTO users (id, username, password, phoneNumber, email, refreshtoken) VALUES (?, ?, ?, ?, ?, ?);`;
  if (userName === undefined || password === undefined || phoneNumber === undefined || email === undefined) {
    reject(new Error("One or more parameters are undefined"));
    return;
}
const id=uuidv4()
     db.execute(query,[id,userName,password,phoneNumber,email,refreshtoken],(err,result)=>{
        if(err){
                reject(err)
        }else{
                resolve(result)
        }
    })

})

};

const userLogin=(email,password)=>{
    const query=`SELECT * FROM users WHERE email=?`
        return new Promise( (resolve,reject)=>{

            if(!email){
                reject({code:1,messgae:"unknown parameter key in body"})
            }
            db.execute(query,[email],(err,result)=>{
              if(err){
                     reject({code:0,message:"db query went wrong",err:err})      
                }else{
                    if(result.length==0){
                        reject({code:1,message:"user does not exist"})
                    }else{
                        
                        
                        
                        resolve({code:2,message:"user found",data:result[0]})
                    }
                

              }
            })

    })

}


module.exports={userSignUp,userLogin}