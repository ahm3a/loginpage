const express=require ('express');
const path= require('path');
const router= express.Router();
const {creatProduct}=require("../routes/services/Productsservices")
const {Trycatch,trycatchasync}= require('../routes/services/utils/Trycatch');
const { validatorproducts } = require('./services/Productsservices');
const sharp=require('sharp');
const multer=require('multer');
const simage= multer.memoryStorage();
const upload= multer({storage:simage});



// Function to handle product creation
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
   // Compress the uploaded image to reduce file size
   const compress = await sharp(file.buffer).jpeg({ quality: 50 }).toBuffer();
   
   // Generate a unique filename for the product image
   const filename = `product_${Date.now()}${path.extname(file.originalname)}`;
   
   // Define the path where the image will be saved
   const filepath = path.join('./public/images/products', filename);
   
   // Get product details from the request body
   const product = req.body;
   
   // Create the product with the image path
   creatProduct(product, `/images/Products/${filename}`);
   
   // Save the compressed image to the specified filepath
   await sharp(compress).toFile(filepath);

   return res.status(201).json({
  message:"products was created successfuly"
 });
  })
);

// Function to getting products
router.get('/api/products',
validatorproducts,Trycatch,( (req, res) => {
    return res.status(200).json({
       message:"data was getting successfuly"
  });
})
);