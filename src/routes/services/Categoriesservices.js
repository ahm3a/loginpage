requure('dotenv').config()
const db= require('better-sqlite3')(process.env. DBNAME);


const creat=category=> {
const query=
 "INSERT INTO categories (description,active,creates_at) VALUES (?,?,?)";
const currentTime= new Date().now; 
const result= db.prepare(query).run(category.description,1,currentTime)
if(result.changes === 0) {
    throw new Error('something went wrong while creating a new category');
}
};
const getall=()=> {
    const query=
     "SELECT  id,description WHERE active=1";
    const result= db.prepare(query).all();
    return result;
    };
    

module.exports= {
    creat,
    getall
}