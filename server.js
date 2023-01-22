const mongoose =require('mongoose')
const app =require('./app')
const port = 4000
const uri='mongodb+srv://admin:admin@cluster0.jj3rzxo.mongodb.net/news'
try {
    const res= mongoose.connect(uri).then((con)=>{
        console.log(con.Connection)
    });
} catch (error) {
    console.log(error)
    
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})