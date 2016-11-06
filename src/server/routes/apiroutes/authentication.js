import express from 'express'
import Barber from '../../models/barber'
import User from '../../models/user'
import passport from 'passport'
import authenticate from '../authenticate'
import { UsernameExistsError, EmailExistsError, UsernameEmailExistsError } from '../../config/errors'

const router = express.Router();

router.post('/login', (req, res, next) => {
	passport.authenticate('local', (error, user, info) => {
		if (error) return next(error);

		if (!user) return res.json({success: false, error: 'Incorrect username or password.'});

		req.login(user, err => {
			if (err) return next(err);
			return res.json({success: true});
		});
	})(req, res, next);
});

router.get('/logout', (req, res) => {
	req.logout();
	res.json({success: true});
});

router.delete('/user', authenticate, (req, res) => {
	const user = req.user.username;
	req.logout();
	User.removeUser(user)
	.then(() => res.json({success: true}))
	.catch(() => res.json({success: false}));
});

router.post('/register/user', (req, res) => {
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
	req.checkBody('password', 'Enter a valid password.').notEmpty();
	req.checkBody('email', 'Enter a valid email address.').notEmpty().isEmail();
	req.checkBody('birthday', 'Enter a valid birthday.').notEmpty().isDate();
	req.checkBody('gender', 'Enter a valid gender.').notEmpty().isAlpha().isLength({min:1, max:1});
	
	const errors = req.validationErrors();
	if(errors) {
		res.json({errors: errors, data: data});
	}
	else {
		User.addUser(data)
		.then(() => res.json({success: true}))
		.catch(UsernameExistsError, error => {
			res.json({success: false, errors: ['The username you selected already exists.'], data: data});
		})
		.catch(EmailExistsError, error => {
			res.json({success: false, errors: ['The email you selected already exists.'], data: data});
		})
		.catch(UsernameEmailExistsError, error => {
			res.json({success: false, errors: ['The username you selected already exists.', 'The email you selected already exists.'], data: data});
		})
		.catch(error => {
			res.json({success: false, errors: ['Your request could not be processed.'], data: data});
		});
	}
});

router.post('/register/barber', (req, res) => {
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
		yearscut: req.body.yearscut,
		description: req.body.description
	};

	req.checkBody('username', 'Enter a valid username.').notEmpty().isAlphanumeric();
	req.checkBody('firstname', 'Enter a valid first name.').notEmpty().isAlpha();
	req.checkBody('middlename', 'Enter a valid middle name.').isAlpha();
	req.checkBody('lastname', 'Enter a valid last name.').notEmpty().isAlpha();
	req.checkBody('password', 'Enter a valid password.').notEmpty();
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
		res.json({errors: errors, data: data});
	}
	else {
		Barber.addBarber(data)
		.then(() => res.json({success: true}))
		.catch(UsernameExistsError, error => {
			res.json({success: false, errors: ['The username you selected already exists.'], data: data});
		})
		.catch(EmailExistsError, error => {
			res.json({success: false, errors: ['The email you selected already exists.'], data: data});
		})
		.catch(UsernameEmailExistsError, error => {
			res.json({success: false, errors: ['The username you selected already exists.', 'The email you selected already exists.'], data: data});
		})
		.catch(error => {
			res.json({success: false, errors: ['Your request could not be processed.'], data: data});
		});
	}
});

export default router;