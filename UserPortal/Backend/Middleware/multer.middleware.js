import multer from "multer";

const myStorage=multer.diskStorage({})

const myfilter=(req,file,cb)=>{
    const allowedType=["image/jpeg","image/jpg","image/gif"]
    if(allowedType){}

 }

const upload=multer({
    
})