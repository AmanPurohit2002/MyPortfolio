const express=require('express');
const cors=require('cors');
const connectToDb =require('./db.js')
const Form =require('./FormModel');

require('dotenv').config();

const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res)=>{
    res.send(`<h1>Hello World!</h1>`);
})

app.post('/contact-details',async (req,res)=>{
    const {name,email,message}=req.body;

    // console.log("req.body is ",req.body);
    
    // console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    try {
        await Form.create({name,email,message})

        // await newUser.save();

        res.send("data added succesfully")

        
    } catch (error) {
        console.log(error.message)
    }



})


app.listen(process.env.PORT,async ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    await connectToDb();
})