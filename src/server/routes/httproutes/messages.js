import express from 'express'
import authenticate from '../authenticate'
import Message from '../../models/message'

const router = express.Router();

router.get('/', authenticate, (req, res) => {
	Message.getConversations(req.user.username)
	.then(conversations => {
		//render messages view with react
	});
});

router.get('/:username', authenticate, (req, res) => {
    Message.getConversationByUsername(req.user.username, req.params.username, 0, 25)
	.then(conversation => {
		//render message view with react
	});
});

export default router;