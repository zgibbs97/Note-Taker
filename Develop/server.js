const express = require('express');

const app = express();

const PORT = process.eve.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));


require('./routes/apiRoute')(app);
require('./routes/htmlRoute')(app);

app.listen(PORT, function(){
    console.log(`The server is listening`);
});

