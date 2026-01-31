import express from "express";

const app = express();

const port = 8080;

app.use(express.json());
 

app.get("/",(req,res)=>{

    res.send("hey there");
})

app.listen(port ,()=>{

    console.log(`server is running on port ${port}`)
})