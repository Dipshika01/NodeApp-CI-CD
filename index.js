const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req,res)=> {
    res.send("Hello D, CI/CD is working");
});

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
});