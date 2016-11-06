import express from 'express'
import Message from '../models/Message'
import authenticate from './authenticate'

const router = express.Router();

router.get('/', authenticate, (req, res) => {
	Message.getConversations(req.user.username)
	.then(conversations => {
		res.json({success: true, conversations: conversations});
	})
	.catch(error => {
		res.json({success: false, error: error});
	});
});

router.get('/:username', authenticate, (req, res) => {
    Message.getConversationByUsername(req.user.username, req.params.username, 0, 50)
	.then(conversation => {
		res.json({success: true, conversation: conversation});
	})
	.catch(error => {
		res.json({success: false, error: error});
	});
});

export default router;