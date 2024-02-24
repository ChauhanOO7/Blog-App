const cloudinary=require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret, 
}); 

// cloudinary.config({ 
//     cloud_name: "dhh4fthat", 
//     api_key: "268424283646637", 
//     api_secret: "GnVe6guWdaX6xQv_TBN7jJp8TMU", 
// }); 


module.exports=cloudinary;