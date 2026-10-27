const router = require("express").Router();
const pool = require("../db/pool");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Registering a new user
router.post("/register_user", async (req, res) => {
    try {
        const {email, password } = req.body;
        
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Some error occurred while registering the user" });
    }
});