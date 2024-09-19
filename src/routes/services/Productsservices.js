require('dotenv').config()
const db=require("better-sqlite3")(process.env.DBNAME)
const creatProduct=(product,image)=>{
    const {}=product;
    const now= new Date();
const query='INSERT INTO products(title,description,price,category,image,created_at) VALUES(?,?,?,?,?,?)';
const result=db.prepare(query).run(title,description,price,category,image,now.toISOString)
if(result.changes==0){
    throw new error('there is an error while creating');
      
}
module.exports={creatProduct};
}