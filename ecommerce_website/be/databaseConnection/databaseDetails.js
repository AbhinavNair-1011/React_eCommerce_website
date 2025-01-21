const mySql=require("mysql2");
const dbPassword=process.env.DB_PASSWORD

const connection = mySql.createConnection({
    host:'localhost',
    user:"root",
    password:dbPassword,
    database:"ecommerce_project"

})

module.exports=connection