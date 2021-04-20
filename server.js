const dotenv = require("dotenv").config()
let express = require('express');
let app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const password = process.env.PASSWORD
const username = process.env.USERNAME

const mongoose = require('mongoose');
const remoteUri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.a0ii5.mongodb.net/whiteboard?retryWrites=true&w=majority`;
try {
    mongoose.connect(remoteUri,
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log('connected to db'));
} catch (err) {
    console.log('failed to connect to db')
}
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
require('./controllers/quiz-attempts-controller')(app)
const port = process.env.PORT || 3001
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

//const demos = require('./controllers/demo-controller');
//demos(app);