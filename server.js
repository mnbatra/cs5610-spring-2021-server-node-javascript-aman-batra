const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/whiteboard',
    {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();

const session =require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))


//CONFIGURING CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require("./controllers/question-controller")(app)
require("./controllers/quizzes-controller")(app)

app.listen(3001);

//const demos = require('./controllers/demo-controller');
//demos(app);