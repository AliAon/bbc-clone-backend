const express = require('express')
const {GetNews,AddNews, RemoveNews} =require('../Controller/newsController')
const newsRouter=express.Router()
newsRouter.get('/',GetNews)
newsRouter.post('/',AddNews)
newsRouter.delete('/:newsId',RemoveNews)
module.exports=newsRouter