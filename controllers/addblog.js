const {blogs}=require("../models/blogs");
const cloud=require("../cloudinary");

async function makeblog(req,res)
{
    const data=req.body;

    let Title="No Title";
    let imagelocation;

    try
    {
        imagelocation=await cloud.uploader.upload(`./uploads/${!req.file ? "bloggify.jpg" : req.file.filename}`,
        {
            folder:"images"
        
        });
    

        if(data.title) Title=data.title;
        const blog=blogs({
            title:Title,
            blogimage: {
                public_id:imagelocation.public_id,
                url:imagelocation.secure_url
            },
            body:data.content,
            created_by:req.user._id
        });

        blog.save();

    }
    catch(error){
        console.error(error);
        if(error.message==="Request Timeout")
        {
            res.send("Request Timeout... Try after Sometime...")
        }
    }
    return res.redirect(301,"/");

}


module.exports={makeblog};