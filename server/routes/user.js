const express = require('express');
const db = require('../services/db');
const router = new express.Router();

router.get('/user', (req, res) => {
    const IdUser = req.query.IdUser;

    db.query(
        'SELECT ArtistName FROM users WHERE IdUser = ?',
        [IdUser],
        (err, ArtistName) => {
            if (err) {
                res.send({ err: err });
            } else {
                res.send(ArtistName);
            }
        },
    );
});

module.exports = router;
