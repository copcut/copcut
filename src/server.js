import Promise from 'bluebird'
import express from 'express'
import expressHandlebars from 'express-handlebars'
import cookieParser from 'cookie-parser' 
import bodyParser from 'body-parser'
import passport from 'passport'
import passportLocal from 'passport-local'
import session from 'express-session' 
import flash from 'connect-flash'
import authenticationRoutes from './routes/authentication'
import Database from './models/database'
import Barber from './models/barber'

Database.connect();

const app = express();

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(flash());
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false }
}));

const LocalStrategy = passportLocal.Strategy;
passport.serializeUser(function(user, done) {
	console.log("serialize", user.username);
    done(null, user.username);
});

passport.deserializeUser(function(username, done) {
	console.log("deserialize", username);
    User.getUser(username).asCallback(done);
});

passport.use(new LocalStrategy((username, password, done) => {
	/*
	**  Passport has no support for promises so to mimic the functionality of the done callback:
	**  1) Return Promise.resolve passing in an array of done's arguments
	**	2) Call Promise.asCallback with spread set to true on the promise
	*/
	User.getUser(username).then((user) => {
		if(!user) {
			return Promise.resolve([false, { message: 'Incorrect username.' }]);
		}

		return User.checkPassword(username, password).then(validPassword => {
			if(validPassword) {
				return Promise.resolve([user, { message: 'Welcome' }]);
			}
			else {
				return Promise.resolve([false, { message: 'Incorrect password.' }]);
			}
		});
	}).asCallback(done, { spread: true });
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', authenticationRoutes);

app.use(express.static(__dirname+'/designs'));
app.listen(3000);
