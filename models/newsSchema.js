const mongoose=require('mongoose')
const newsSchema=new mongoose.Schema({
    title:String,
    image:String,
    excerpt:String,
    tag:String  ,
    category:{
        type:mongoose.Schema.ObjectId,
        ref:'Category'
    }
});
newsSchema.pre('find',function(next){
    this.populate({
        path:'category',
        select:"-_id -slug"
        })
    next()
 }) 
const News=mongoose.model('News',newsSchema)
module.exports=News