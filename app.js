const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {coursemodel} =require("./models/course.js")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sachin:sachin@cluster0.ervt8e3.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/add",(req,res)=>{
    let input = req.body
    let course=new coursemodel(input)
    course.save()
    console.log(course)
    res.json({"status":"test"})
}) 

app.get("/search",(req,res)=>{
    res.send("welcome")
})


app.post("/delete",(req,res)=>{
    res.send("welcome")
})

app.get("/view",(req,res) => {
    coursemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch()
})

app.listen(8080,()=>{
    console.log("server started")
})
