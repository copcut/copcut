import express from 'express'
const router = express.Router();

router.get('/login', (req, res) => {
    
});

router.post('/login', (req, res) => {
    
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/register', (req, res) => {
    
});

router.post('/register', (req, res) => {
    
});

export default router;