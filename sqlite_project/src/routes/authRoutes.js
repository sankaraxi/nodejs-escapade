import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

router.post('/register', async (req, res) => {

    const {username, password} = req.body;

    // save the username and irreversibly hashed password in the database
    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
        const insertUser = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
        const result = insertUser.run(username, hashedPassword);


        // create a default todo for the user as soon as they register
        const defaultTodo = 'Hello :) Add your first todo!';
        const insertTodo = db.prepare('INSERT INTO todos (user_id, task) VALUES (?, ?)');
        insertTodo.run(result.lastInsertRowid, defaultTodo);

        //token
        const token = jwt.sign({id: result.lastInsertRowid}, process.env.TOKEN_SECRET, {expiresIn: '24h'});
        res.json({token});


    }catch(err) {
        console.log(err.message);
        res.sendStatus(503);
    }


});

router.post('/login', async (req, res) => {

    const {username, password} = req.body;

    try{
        const selectUser = db.prepare('SELECT * FROM users WHERE username = ?');
        const user = selectUser.get(username);

        if(!user) {
            return res.status(400).send({ message:'Username not found' });
        }

        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).send({ message:'Invalid password' });
        }
        console.log(user);

        //token
        const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET, {expiresIn: '24h'});
        res.json({token});

    }catch(err) {
        console.log(err.message);
        res.sendStatus(503);
    }

});

export default router;