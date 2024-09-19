const  trycatch = controller => (req, res, next) => {
       try {
           controller(req, res);
       } catch (err) {
           console.log(err);
           next(err);
       }
    };
    
    const  trycatchasync = controller => async (req, res, next) => {
        try {
          await  controller(req, res);
        } catch (err) {
            console.log(err);
            next(err);
        }
     };
  module.exports = {
    trycatch,
    trycatchasync
}
