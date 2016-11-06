import Promise from 'bluebird'
import express from 'express'
import expressHandlebars from 'express-handlebars'
import cookieParser from 'cookie-parser' 
import bodyParser from 'body-parser'
import passport from 'passport'
import configurePassport from './server/config/passport-config'
import validator from 'express-validator'
import session from 'express-session' 
import path from 'path'
import Database from './server/models/database'
import APIRouter from './server/routes/apirouter'

import React from 'react'
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import routes from './app/routes'

Database.connect();
//run this only first time app is run. comment everything else after this out
/*
Database.initialize().then(() => {
	 console.log("database initialized");
	 process.exit(0);
});
*/

const app = express();
app.use(express.static(__dirname+'/static'));

//Rendering Engine
const handlebars = expressHandlebars.create({extname: '.handlebars'});
app.set('views', __dirname+'/app/');
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


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
		res.render('application', {
			layout: false,
			content: html
		});
	});
});

app.listen(3000);