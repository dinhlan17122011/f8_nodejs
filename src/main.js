const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
var morgan = require('morgan');
const handlebars = require('express-handlebars').engine;

const dt =require('./resources/ket-noi')
const route = require('./resources/router');

dt.connect()

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.set('views', path.join(__dirname, 'resources/views'));
app.engine('hbs', handlebars({ extname: 'hbs' }));
app.set('view engine', 'hbs');

//Test .log

console.log('NET:', path.join(__dirname, 'public'));
console.log('NET2:', path.join(__dirname, 'resources/views'));
//route
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
