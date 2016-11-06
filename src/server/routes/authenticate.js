const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated())
        return next();

    res.json({success:false, error: "You need to be logged in to do that!"});
}

export default isAuthenticated;