import express from 'express'
import passport from 'passport'
import Barber from '../../models/barber'
import authenticate from '../authenticate'

const router = express.Router();

router.get('/:username', (req, res) => {
    Barber.getBarber(req.params.username)
    .then(barber => {
    	if(req.isAuthenticated()) {
			res.json({success: true, barber: barber, authenticated: true});
		}
		else {
			res.json({success: true, barber: barber, authenticated: false});
		}
	})
	.catch(error => {
		res.json({success: false})
	});
});

router.put('/update', authenticate, (req, res) => {
	const data = {
		address: req.body.address,
		city: req.body.city,
		country: req.body.country,
		postcode: req.body.postcode,
		phonenumber: req.body.phonenumber,
		yearscut: req.body.yearscut,
		description: req.body.description
	};

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
    	Barber.updateBarber(req.user.username, data)
    	.then(() => res.json({success: true}))
    	.catch(error => res.json({success: false}));
    }
});

export default router;