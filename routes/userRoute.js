const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require("knex")(require("../knexfile"));
const authorize = require('../middleware/authorize');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const cors=require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true, //access-control-allow-credentials:true
     optionSuccessStatus:200,
}

app.use(cors(corsOptions))

router.get("/", authorize, (req, res) => {
    knex("users")
        .where({ id: req.userId })
        .then(data => {
            return res.json(data);
        })
});
        
  

router.post("/login", (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            error: "Email and password fields are required"
        })
    }

    knex("users")
        .where({ email: req.body.email })
        .then(users => {
            if (users.length !== 1) {
                return res.status(401).json({
                    error: "Invalid login credentials."
                })
            }

            const foundUser = users[0];
    
            const isValidPassword = bcrypt.compareSync(req.body.password, foundUser.password)

            if (!isValidPassword) {
                return res.status(401).json({
                    error: "Invalid login credentials."
                })
            }

            const token = jwt.sign({ id: foundUser.id }, process.env.JWT_SECRET_KEY);
        
            res.json({
                message: "Successfully logged in",
                token: token
            })
        })
});

router.post("/register", async (req, res) => {
   
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
        return res.status(400).json({ error: "Registration requires email and password fields"});
    }
    
    const foundUsers = await knex("users")
        .where({ email: email});

    if (foundUsers.length === 1) {
        return res.status(400).json({ error: "User account with this email already exists" });
    }
    
    const hashedPassword = bcrypt.hashSync(password, Number(process.env.BCRYPT_SALT_ROUNDS));

    const newUserIds = await knex("users")
        .insert({
            name,
            email,
            password: hashedPassword
        });
    const newUserId = newUserIds[0];

    const newUsers = await knex("users")
        .where({ id: newUserId });

    const newUser = newUsers[0];
    
    const token = jwt.sign({ id: newUser.id}, process.env.JWT_SECRET_KEY);

    res.json({
        message: "Successfully logged in",
        token
    })
})


module.exports = router;