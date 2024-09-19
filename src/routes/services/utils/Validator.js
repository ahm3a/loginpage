const joi = require('joi');
const validator=schema=>
    (req, res, next) => {
        const {error}= schema.validate(req.body, {abrotEarly: false});
        if(error){
            var message="";
            for(let key in error.details){
                var detail=error.details[key];
                message+=detail.messae +`\n`;
            }
            return res.status(400).json({
                message:message
            })
        }
        next();
    };
    

    const productsschema=joi.object({
        title:joi.string().required(),
        description:joi.string().required(),
        price:joi.number().required(),
        category:joi.number().required()
    });
    module.exports={
        validatorproducts:validator(productsschema), 
    }