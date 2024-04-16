

const mongoose=require('mongoose')
const URL= "mongodb://127.0.0.1:27017/profile"


mongoose.connect(URL)
const db=mongoose.connection

db.on('connect',()=>console.log( 'connected to the database'))

module.exports={db}