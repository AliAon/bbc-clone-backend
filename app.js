const express = require('express')
const app = express()
const newsRouter=require('./routes/news')
const CategoryRouter=require('./routes/category')
const cors = require('cors')
const multer  = require('multer')

app.use('/uploads',express.static('uploads'))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const extention=file.mimetype.split('/')[1]
    cb(null, file.fieldname + '-' + uniqueSuffix+'.'+extention)
  }
})
const upload = multer({ storage: storage })
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  }))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api/news',upload.single('featuredimage'),newsRouter)
app.use('/api/categories',CategoryRouter)
module.exports=app