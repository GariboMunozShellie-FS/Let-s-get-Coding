const express = require("express");
const router = express.Router();

//http://localhost:3000/85
// - Get 

router.get("/", (req,res, next) => {
    res.status(200).json({
        message: "Using GET",
        metadata: {
            host: req.hostname,
            method: req.method
        },
    })
})

// - Get by ID
router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Using GET by ID",
        metadata: {
            host: req.hostname,
            method: req.method,
            ID: id
        },
    })
});

// - POST
router.post("/", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    res.status(200).json({
        message: "Using POST",
        metadata: {
            name: name,
            age: age,
            host: req.hostname,
            method: req.method
        },
    })
})

// - PATCH
router.patch("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Using PATCH by ID",
        metadata: {
            host: req.hostname,
            method: req.method,
            ID: id
        },
    })
});


// - DELETE
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Using DELETE by ID",
        metadata: {
            host: req.hostname,
            method: req.method,
            ID: id
        },
    })
});

module.exports = router