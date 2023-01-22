const express = require('express')
const {GetAll, AddCategory, RemoveCategory} =require('../Controller/categoryController')
const CategoryRouter=express.Router()
CategoryRouter.get('/',GetAll)
CategoryRouter.post('/',AddCategory)
CategoryRouter.delete('/:cateId',RemoveCategory)
module.exports=CategoryRouter