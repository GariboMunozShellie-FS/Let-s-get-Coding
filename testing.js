const express = require("express");
require("dotenv").config();
const app =express();

app.get("/", (req,res, next) => {
    res.json({message: "did you GET it?"});
})

//middleware modules for error handelingnpm
app.use((req, res, next) => {
    const error = new Error("NOT FOUND!");
    error.status = 404;
    next(error);
})

//middleware to send error nicely
app.use((error, req, res, next)=> {
    res.status(error.status || 500).json({
        error: {
            message: error.message, 
            status: error.status,
            method: req.method
        }
    });
});

app.listen(process.env.port, ()=> console.log(`starting server on port ${process.env.port}`))