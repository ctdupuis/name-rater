const path = require('path');
const express = require('express');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 4000;
app.use(express.static(publicPath));


const { db } = require('./db/setup');
db();

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
   console.log(`Server up on port ${port}`);
});