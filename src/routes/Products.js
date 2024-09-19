const express=require ('express');
const path= require('path');
const router= express.Router();
const {Trycatch,trycatchasync}= require('../routes/services/utils/Trycatch');
const { validatorproducts } = require('./services/Productsservices');
const sharp=require('sharp');
const multer=require('multer');
const simage= multer.memoryStorage();
const upload= multer({storage:simage});


router.post('/api/products',upload.fields([{
    name:'image',
    maxCount:1
}]),
validatorproducts,trycatchasync,(async (req, res) => {
   const file= req.files.image[0];
   if(!file){
return res.status(400).json({
    message:"please provide image"
});
   }
   const compress= await sharp(file.buffer).jpeg({quality:50}).toBuffer();
  const filename=`product-${Date.now()}${path.extname(file.originalname)}`;   
   const filepath=path.join('./public/images/products',filename);
   const products=req.body;
 })
);
router.get('/api/products',
validatorproducts,Trycatch,( (req, res) => {
    return res.status(200).json({
       
  });
})
); 