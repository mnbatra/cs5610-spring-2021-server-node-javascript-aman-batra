const express = require('express');
const app = express();


const add = (rq,rs) => {
    const a = parseInt(rq.params['paramA']);
    const b = parseInt(rq.params['paramB']);
    rs.send(`${a+b}`);
}

const subtract = (req,res) => {
    const x = req.query['x'];
    const y = req.query['y'];
    res.send(`${x-y}`);
}

app.get('/add/:paramA/:paramB/', add);
app.get('/subtract',subtract)
app.get('/',(req, res) => res.send('hello world'));

app.listen(3000);