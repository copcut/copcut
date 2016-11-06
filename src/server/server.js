import Promise from 'bluebird'
import express from 'express'
import expressHandlebars from 'express-handlebars'
import cookieParser from 'cookie-parser' 
import bodyParser from 'body-parser'
import passport from 'passport'
import configurePassport from './config/passport-config'
import validator from 'express-validator'
import session from 'express-session' 
import flash from 'connect-flash'

import Database from './models/database'

import HTTPRouter from './routes/httproutes/httprouter'
import APIRouter from './routes/apiroutes/apirouter'

Database.connect();
/*
Database.initialize().then(() => {
	 console.log("database initialized");
	 process.exit(0);
}); //run this only first time app is run. comment everything else after this out
*/

const app = express();
app.use(express.static(__dirname+'/../static'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(validator());
app.use(flash());
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { 
		secure: false,
		httpOnly: true
	}
}));

configurePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', APIRouter)
app.use('/', HTTPRouter);
app.listen(3000);