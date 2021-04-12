const express = require('express');
const app = express();

//CONFIGURING CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require("./controllers/questions-controller")(app)
require("./controllers/quizzes-controller")(app)
app.listen(3000);

//const demos = require('./controllers/demo-controller');
//demos(app);