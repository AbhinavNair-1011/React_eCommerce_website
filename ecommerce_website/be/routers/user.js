const express=require("express")
const router = express.Router();
const bcrypt=require("../util/bcrpyt");
const userController=require("../controllers/userController")


router.post("/user-signUp",bcrypt.encryptUser,userController.userSignUp);
router.post("/user-login",userController.userLogin)


module.exports=router
