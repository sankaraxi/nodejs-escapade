import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

router.post('/register', async (req, res) => {

    const {username, password} = req.body;

    // save the username and irreversibly hashed password in the database
    console.log(username, password);
    res.sendStatus(201);

});

router.post('/login', async (req, res) => {

});

export default router;