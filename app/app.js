const express = require("express");
const router = require("../router/routes");
const app =express();

// middleware
//takes in your payload as json req.body.firstname
//takes parameters from your url
app.use(express.json())
// http://localhost:3000/85
// req.params.id
app.use(express.urlencoded({extended: true}));

// set up router
app.use('/', router);

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

module.exports = app