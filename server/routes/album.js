const express = require('express');
const db = require('../services/db');
const router = new express.Router();

router.get('/albums', (req, res) => {
    db.query('SELECT * FROM album limit 10', (err, albums) => {
        if (err) {
            res.send({ err: err });
        } else {
            res.send(albums);
        }
    });
});

module.exports = router;
