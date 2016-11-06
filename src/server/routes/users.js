import express from 'express'
import passport from 'passport'
import User from '../models/user'
import authenticate from './authenticate'

const router = express.Router();

router.get('/:username', (req, res) => {
    User.getUser(req.params.username)
    .then(user => {
    	if(req.isAuthenticated()) {
			res.json({success: true, user: user, authenticated: true});
		}
		else {
			res.json({success: true, user: user, authenticated: false});
		}
	})
	.catch(error => res.json({success: false}));
});

router.put('/update', authenticate, (req, res) => {
	const data = {
		firstname: req.body.firstname,
		middlename: req.body.middlename,
		lastname: req.body.lastname,
		birthday: new Date(req.body.birthday),
		gender: req.body.gender,
	};

	req.checkBody('firstname', 'Enter a valid first name.').notEmpty().isAlpha();
	req.checkBody('middlename', 'Enter a valid middle name.').isAlpha();
	req.checkBody('lastname', 'Enter a valid last name.').notEmpty().isAlpha();
	req.checkBody('birthday', 'Enter a valid birthday.').notEmpty().isDate();
	req.checkBody('gender', 'Enter a valid gender.').notEmpty().isAlpha().isLength({min:1, max:1});

	const errors = req.validationErrors();
	if(errors) {
		res.json({errors: errors, data: data});
	}
	else {
    	User.updateUser(req.user.username, data)
    	.then(() => res.json({success: true}))
    	.catch(error => res.json({success: false}));
    }
});

router.put('/update/secure', authenticate, (req, res) => {
	const data = {
		password: req.body.password,
	};

	req.checkBody('password', 'Enter a valid password.').notEmpty();

	const errors = req.validationErrors();
	if(errors) {
		res.json({errors: errors, data: data});
	}
	else {
		User.updateSecureFields(req.user.username, data)
		.then(() => res.json({success: true}))
		.catch(() => res.json({success: false}));
	}
});

export default router;