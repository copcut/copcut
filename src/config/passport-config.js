import passportLocal from 'passport-local'
import User from '../models/user'
import Promise from 'bluebird'

//configure passport with a local sign in option
const configurePassport = passport => {
	const LocalStrategy = passportLocal.Strategy;

	passport.serializeUser((user, done) => {
		console.log("serialize", user.username);
	    done(null, user.username);
	});

	passport.deserializeUser((username, done) => {
		console.log("deserialize", username);
	    User.getUser(username).asCallback(done);
	});

	passport.use('local', new LocalStrategy({passReqToCallback : true}, (req, username, password, done) => {
		/*
		**  Passport has no support for promises so to mimic the functionality of the done callback:
		**  1) Return Promise.resolve passing in an array of done's arguments
		**	2) Call Promise.asCallback with spread set to true
		*/
		User.getUser(username).then((user) => {
			if(!user) {
				req.flash('loginUsername', username);
				return Promise.resolve([false, req.flash('loginMessage', 'Incorrect username or password.')]);
			}

			return User.checkPassword(username, password).then(validPassword => {
				if(validPassword) {
					return Promise.resolve([user]);
				}
				else {
					req.flash('loginUsername', username);
					return Promise.resolve([false, req.flash('loginMessage', 'Incorrect username or password.')]);
				}
			});
		}).asCallback(done, {spread: true});
	}));
}

export default configurePassport;


