const ErrorHandler = (err, req, res, next) => {
    return res.status(500).json({
       message:"somthing went wrong",
    })
}
module.exports= {ErrorHandler}