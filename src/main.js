const express= require('express');
const app= express();
require('dotenv').config();
app.use(express.json());
const categories= require('./routes/Categories');
const ErrorHandler= require('./routes/services/utils/ErrorHandler');
const products= require('./routes/Products');

app.use(products);
app.use(categories);
app.use(ErrorHandler);
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`server is running on${port}`);
});