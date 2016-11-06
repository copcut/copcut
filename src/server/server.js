import Promise from 'bluebird'
import express from 'express'
import expressHandlebars from 'express-handlebars'
import cookieParser from 'cookie-parser' 
import bodyParser from 'body-parser'
import passport from 'passport'
import configurePassport from './config/passport-config'
import validator from 'express-validator'
import session from 'express-session' 
import path from 'path'
import Database from './models/database'
import APIRouter from './routes/apiroutes/apirouter'

import React from 'react'
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import routes from '../app/routes'

Database.connect();
//run this only first time app is run. comment everything else after this out
/*
Database.initialize().then(() => {
	 console.log("database initialized");
	 process.exit(0);
});
*/

const app = express();
app.use(express.static(__dirname+'/../static'));
app.use(express.static(__dirname+'/../app'));

//parse cookies, json
app.use(cookieParser());
app.use(bodyParser.json());
//validator middleware for forms
app.use(validator());

//Express Session for logins
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { 
		secure: false,
		httpOnly: true
	}
}));

//Configure Strategies and initialize passport/session
configurePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// REST API
app.use('/api', APIRouter);

//Wildcard Route for React SPA
app.get('*', function (req, res) {
	match({ routes: routes, location: req.url }, (err, redirect, props) => {
		const html = renderToString(<RouterContext {...props}/>)

	});
});

app.listen(3000);