const express=require('express')
const mongoose=require('mongoose')

// first we will create schema

const ProfileSchema=new mongoose.Schema({
    name:{
        type:String,
        require,
    },
    fatherName:{
        type:String,
        require
    },
    age:{
        type:Number,
        require
    },
    gender:{
        type:String,
        require
    },
    mobile:{
        type:Number,
        require
    },
    address:{
        type:String,
        require
    },
    city:{
        type:String,
        require
    },
    state:{
        type:String,
        require
    }
})


const ProfileModel=new mongoose.model('profile',ProfileSchema)

module.exports=ProfileModel

