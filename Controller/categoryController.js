const Category=require('../models/categorySchema')
exports.GetAll=async(req,res)=>{
    try {
     const result=await Category.find()
     res.json(result)
    } catch (error) {
        res.send('error')
    }
}
exports.AddCategory=async(req,res)=>{
    try {
     const result=await Category.create(req.body)
     res.send('Category Added')

    } catch (error) {
        res.send('error')
    }
}

exports.RemoveCategory=async(req,res)=>{
    try {
     const result=await Category.findByIdAndRemove({_id:req.params.cateId})
     res.send('Removed')

    } catch (error) {
        res.send('error')
    }
}

