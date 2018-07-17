const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));

app.get('/signup', function(req, res) {
    res.send('This works');
});

app.post('/createuser', function(req, res) {
    res.send('This works');
});

app.get('*', function(req, res) {
    //res.send('Page does not exist. Check your url');
    res.render('error', {message: 'TRY SOMETHING ELSE'});
});


app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Server is now running on PORT ${port}`);
});
