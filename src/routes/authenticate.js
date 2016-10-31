const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated())
        return next();

    req.flash('loginMessage', 'you must be logged in to do that');
    res.redirect('/login');
}

export default isAuthenticated;