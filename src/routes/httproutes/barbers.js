import express from 'express'
import passport from 'passport'
import Barber from '../../models/barber'
import { UserNotFoundError, BarberNotFoundError } from '../../config/errors'

const router = express.Router();

router.get('/:username', (req, res) => {
    Barber.getBarber(req.params.username)
    .then(barber => {
    	if(req.isAuthenticated()) {
			//render auth barber view with react 
		}
		else {
			//render public barber view with react 
		}
	})
	.catch(error => {
		//render not found view with react 
	});
});

export default router;