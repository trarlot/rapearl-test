const express = require('express');

const app = express();
const cors = require('cors');
const albumRoutes = require('./routes/album');
const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');
require('dotenv').config();
app.use(cors());
app.use(express.json());

app.use('/album', albumRoutes);
app.use('/login', loginRoutes);
app.use('/users', userRoutes);

app.listen(3001, () => {
    console.log('running server on port 3001 ');
});
