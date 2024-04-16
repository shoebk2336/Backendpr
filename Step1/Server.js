
//import express and initilize the value to app

const express=require("express");
const ProfileModel=require('../Step2/Model')
const db=require('../Step3/db')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.json())







app.get('/',(req,res)=>{
    try{

        res.send('Welcome  To My Website');
    }
    catch(err){
        res.send('Get error'+err)
    }
})


app.post('/profile',async(req,res)=>{
    try{
        const data=req.body
        const profileData=new ProfileModel(data);
            profileData.save();
            await res.send(data)
    }
    catch(err){console.log(err)}
})


app.put('/profile/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const data=req.body
        await ProfileModel.findByIdAndUpdate({_id:id},data)
        res.send("data updated")
    }
    catch(err){console.log(err)}
})

app.delete('/del/:id',async(req,res)=>{
    try{
        const id=req.params.id
        await ProfileModel.findByIdAndDelete({_id:id})
        res.send('deleted')
    }
    catch(err){
        console.log(err)
    }
})
app.listen(3000,()=>console.log('connected'))