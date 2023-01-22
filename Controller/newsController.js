const News = require("../models/newsSchema")

exports.GetNews=async(req,res)=>{
    try {
     const result=await News.find()
     res.json(result)
    } catch (error) {
        res.send('error')
    }
}

exports.AddNews=async(req,res)=>{
    try {
        const url = req.protocol + '://' + req.get('host')
        const news={
            title:req.body.title,
            image:url + '/uploads/images/' + req.file.filename,
            excerpt:req.body.excerpt,
            tag:req.body.tag ,
            category:req.body.category
        }
    const result=await News.create(news)
     res.json(result)

    } catch (error) {
        res.send('error')
    }
}
exports.RemoveNews=async(req,res)=>{
    try {
     const result=await News.findByIdAndRemove({_id:req.params.newsId})
     res.status('200')

    } catch (error) {
        res.send('error')
    }
}

