const path = require('path');
const express = require('express');
const cors = require('cors');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 4000;

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(__dirname));


let corsOptions = {
   origin: ['http://localhost:3000', 'https://comfort-cafe.herokuapp.com'],
   optionsSuccessStatus: 200,
   methods: ["GET, POST, PUT, DELETE"],
   credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

let session = {
   secret: process.env.SESSION_SECRET,
   cookie: { maxAge: 1000 * 60 * 60},
   saveUninitialized: true,
   resave: false
}

app.use(sessions(session));

const { db } = require('./db/setup');
db();

// app.get('*', (req, res) => {
//    res.sendFile(path.join(publicPath, 'index.html'));
// });


// Routers
const userRouter = require('./routes/user_routes');
const nameRouter = require("./routes/name_routes");
app.use("api/users", userRouter);
app.use("api/names", nameRouter);



app.listen(port, () => {
   console.log(`Server up on port ${port}`);
});