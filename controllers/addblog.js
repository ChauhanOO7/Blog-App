const {blogs}=require("../models/blogs");

async function makeblog(req,res)
{
    const data=req.body;
    let Title="No Title";
    let blogimaglocation="static/images/bloggify.jpg";
    if(req.file)   blogimaglocation=`static/uploads/${req.file.filename}`;

    if(data.title) Title=data.title;
    const blog=blogs({
        title:Title,
        blogimage: blogimaglocation,
        body:data.content,
        created_by:req.user._id
    });

    blog.save();
    return res.redirect(301,"/");

}


module.exports={makeblog};