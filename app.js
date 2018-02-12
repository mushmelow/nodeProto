

//handle dependencies

const express= require('express');
const morgan= require('morgan');
const bodyParser= require('body-parser');
const mongoose = require('mongoose')

mongoose.Promise= global.Promise;


const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use('/users', require('./routes/users'));
app.use('/appliance_infos', require('./routes/system-status'));

//mongoose config
var dbUrl = 'mongodb://admin:12345678@ds117848.mlab.com:17848/nodeproto'
//mongoose connection
mongoose.connect(dbUrl, (err) => {
	console.log('mongoose db connection, errors:', err)
})

//start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log('Server listening at', port);

