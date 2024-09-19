const express= require('escpress');
const router= express.Router();
const Trycatch= require('../routes/services/utils/Trycatch');
const {creat,getall}= 
require('../routes/services/Categoriesservices');
router.post('/api/categories',
    Trycatch,( (req, res) => {
    const body= req.body;
    creat(body);
    return res.status(200).json({
        Message:"category created successfully"
  });
 })
);
router.get('/api/categories',
    Trycatch,( (req, res) => {
   const categories=getall();
    return res.status(200).json({
       categories:categories
  });
})
);
module.exports= router; 