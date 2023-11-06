const express = require('express');
const db = require('../services/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = new express.Router();

router.post('/register', (req, res) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const ArtistName = req.body.ArtistName;
    const salt = bcrypt.genSaltSync(10);
    db.query('SELECT * FROM users WHERE Email = ? ', [Email], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            res.send({
                message: 'Cette adresse mail est déja utilisé',
            });
        } else {
            const hashPassword = bcrypt.hashSync(Password, salt);
            db.query(
                'INSERT INTO users (FirstName, LastName,  Email,  Password, ArtistName) VALUES (?,?,?,?,?)',
                [FirstName, LastName, Email, hashPassword, ArtistName],
                (err2, result2) => {
                    console.log(result2);
                    if (err2) {
                        res.send({ err2: err2 });
                    }

                    res.send(result2);
                },
            );
        }
    });
});
router.post('/verify', (req, res) => {
    var token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY_JWT, (err) => {
        if (err) {
            res.send(false);
        } else {
            res.send(true);
        }
    });
});
router.post('/login', (req, res) => {
    const Email = req.body.Email;
    const Password = req.body.Password;

    db.query(
        'SELECT * FROM users WHERE Email = ? ',
        [Email, Password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                //check the hash password
                if (bcrypt.compareSync(Password, result[0].Password)) {
                    //Generate an access token

                    const accessToken = jwt.sign(
                        { email: Email, password: Password },
                        process.env.SECRET_KEY_JWT,
                        { expiresIn: '12h' },
                    );
                    res.json({ email: Email, password: Password, accessToken });
                } else {
                    res.send({
                        message: 'Mot de passe incorrect',
                    });
                }
            } else {
                res.send({
                    message: "Cette adresse mail n'est pas enregistré",
                });
            }
        },
    );
});
module.exports = router;
