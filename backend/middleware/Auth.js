
exports.check = (req,res,next)=>{
    console.log("Hello middleware");
    next();
}