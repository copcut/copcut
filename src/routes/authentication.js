import express from 'express'
import path from 'path'
import multer from 'multer'
import Barber from '../models/barber'
import User from '../models/user'
import passport from 'passport'

import { UsernameExistsError, EmailExistsError, UsernameEmailExistsError } from '../config/errors'

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, __dirname+'/../uploads');
	},

	filename(req, file, cb) {
		cb(null, req.body.username + '-profilepicture.png');
	}
});

const upload = multer({ storage: storage });
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login', {error: req.flash('loginMessage'), username: req.flash('loginUsername')});
});

router.post('/login', passport.authenticate('local', {
	successRedirect : '/',
	failureRedirect : '/login', 
	failureFlash : true
}));

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});

router.get('/register', (req, res) => {
    res.render('register', {errors: req.flash('errors'), info: req.flash('info')[0]});
});

router.post('/registerUser', upload.single(), (req, res) => {
	const data = {
		username: req.body.username,
		firstname: req.body.firstname,
		middlename: req.body.middlename,
		lastname: req.body.lastname,
		password: req.body.password,
		email: req.body.email,
		birthday: req.body.birthday,
		gender: req.body.gender
	};

	req.checkBody('username', 'Enter a valid username.').notEmpty().isAlphanumeric();
	req.checkBody('firstname', 'Enter a valid first name.').notEmpty().isAlpha();
	req.checkBody('middlename', 'Enter a valid middle name.').isAlpha();
	req.checkBody('lastname', 'Enter a valid last name.').notEmpty().isAlpha();
	req.checkBody('password', 'Enter a valid password.').notEmpty().isLength({min:6});
	req.checkBody('email', 'Enter a valid email address.').notEmpty().isEmail();
	req.checkBody('birthday', 'Enter a valid birthday.').notEmpty().isDate();
	req.checkBody('gender', 'Enter a valid gender.').notEmpty().isAlpha().isLength({min:1, max:1});
	
	const errors = req.validationErrors();
	if(errors) {
		req.flash('errors', errors);
		req.flash('info', data);
		res.redirect('/register');
	}
	else {
		User.addUser(data)
		.then(() => res.redirect('/'))
		.catch(UsernameExistsError, error => {
			req.flash('errors', [{msg: 'The username you selected already exists.'}]);
			req.flash('info', data);
			res.redirect('/register');
		})
		.catch(EmailExistsError, error => {
			req.flash('errors', [{msg: 'The email you selected already exists.'}]);
			req.flash('info', data);
			res.redirect('/register');
		})
		.catch(UsernameEmailExistsError, error => {
			req.flash('errors', [{msg: 'The username you selected already exists.'}, {msg: 'The email you selected already exists.'}]);
			req.flash('info', data);
			res.redirect('/register');
		})
		.catch(error => {
			req.flash('errors', [{msg: 'Your request could not be processed.'}]);
			req.flash('info', data);
			res.redirect('/register');
		});
	}
});

router.post('/registerBarber', upload.single('profilepicture'), (req, res) => {
	const data = {
		username: req.body.username,
		firstname: req.body.firstname,
		middlename: req.body.middlename,
		lastname: req.body.lastname,
		password: req.body.password,
		email: req.body.email,
		birthday: req.body.birthday,
		gender: req.body.gender,
		address: req.body.address,
		city: req.body.city,
		country: req.body.country,
		postcode: req.body.postcode,
		phonenumber: req.body.phonenumber,
		profilepicture: req.file.destination,
		yearscut: req.body.yearscut,
		description: req.body.description
	};

	req.checkBody('username', 'Enter a valid username.').notEmpty().isAlphanumeric();
	req.checkBody('firstname', 'Enter a valid first name.').notEmpty().isAlpha();
	req.checkBody('middlename', 'Enter a valid middle name.').isAlpha();
	req.checkBody('lastname', 'Enter a valid last name.').notEmpty().isAlpha();
	req.checkBody('password', 'Enter a valid password.').notEmpty().isLength({min:6});
	req.checkBody('email', 'Enter a valid email address.').notEmpty().isEmail();
	req.checkBody('birthday', 'Enter a valid birthday.').notEmpty().isDate();
	req.checkBody('gender', 'Enter a valid gender.').notEmpty().isAlpha().isLength({min:1, max:1});
	req.checkBody('address', 'Enter a valid address.').notEmpty();
	req.checkBody('city', 'Enter a valid city.').notEmpty();
	req.checkBody('country', 'Enter a valid country.').notEmpty();
	req.checkBody('postcode', 'Enter a valid postcode.').notEmpty().isNumeric();
	req.checkBody('phonenumber', 'Enter a valid US phone number.').notEmpty().isMobilePhone('en-US');
	req.checkBody('yearscut', 'Enter a valid number.').notEmpty().isAlphanumeric();
	req.checkBody('description', 'Enter a valid description.').notEmpty();

	const errors = req.validationErrors();
	if(errors) {
		req.flash('errors', errors);
		req.flash('info', data);
		res.redirect('/register');
	}
	else {
		Barber.addBarber(data)
		.then(() => res.redirect('/'))
		.catch(UsernameExistsError, error => {
			req.flash('errors', [{msg: 'The username you selected already exists.'}]);
			req.flash('info', data);
			res.redirect('/register');
		})
		.catch(EmailExistsError, error => {
			req.flash('errors', [{msg: 'The email you selected already exists.'}]);
			req.flash('info', data);
			res.redirect('/register');
		})
		.catch(UsernameEmailExistsError, error => {
			req.flash('errors', [{msg: 'The username you selected already exists.'}, {msg: 'The email you selected already exists.'}]);
			req.flash('info', data);
			res.redirect('/register');
		})
		.catch(error => {
			req.flash('errors', [{msg: 'Your request could not be processed.'}]);
			req.flash('info', data);
			res.redirect('/register');
		});
	}
});

export default router;