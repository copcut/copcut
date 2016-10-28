import express from 'express'
import path from 'path'
import multer from 'multer'
import Barber from '../models/barber'
import User from '../models/user'
import { UsernameExistsError, EmailExistsError } from '../config/errors'

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
    res.render('login');
});

router.post('/login', (req, res) => {
    
});

router.get('/logout', (req, res) => {
    //req.logout();
    //res.redirect('/');
});

router.get('/register', (req, res) => {
    res.render('register');
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
	User.addUser(data)
	.then(() => res.redirect('/'))
	.catch(UsernameExistsError, error => {

	})
	.catch(EmailExistsError, error => {

	})
	.catch(error => {

	});
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

	Barber.addBarber(data)
	.then(() => res.redirect('/'))
	.catch(UsernameExistsError, error => {

	})
	.catch(EmailExistsError, error => {

	})
	.catch(error => {

	})
	.then(() => {
		res.redirect('/register');
	});
});

export default router;