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
import User from './models/user'
import validator from 'express-validator'

Database.connect();
/*
Database.initialize().then(() => {
	 console.log("database initialized");
	 process.exit(0);
}); //run this only first time app is run
*/
const app = express();

const handlebars = expressHandlebars.create({
	defaultLayout: 'main', 
	extname: '.handlebars',
	layoutsDir: __dirname+'/views/layouts/'
});
app.set('views', __dirname+'/views/');
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/static'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(validator());

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

passport.use('local', new LocalStrategy({passReqToCallback : true}, (req, username, password, done) => {
	/*
	**  Passport has no support for promises so to mimic the functionality of the done callback:
	**  1) Return Promise.resolve passing in an array of done's arguments
	**	2) Call Promise.asCallback with spread set to true
	*/
	User.getUser(username).then((user) => {
		if(!user) {
			req.flash('loginUsername', username);
			return Promise.resolve([false, req.flash('loginMessage', 'Incorrect username.')]);
		}

		return User.checkPassword(username, password).then(validPassword => {
			if(validPassword) {
				return Promise.resolve([user]);
			}
			else {
				req.flash('loginUsername', username);
				return Promise.resolve([false, req.flash('loginMessage', 'Incorrect password.')]);
			}
		});
	}).asCallback(done, {spread: true});
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
	if(req.isAuthenticated()) {
		res.render('dashboard', {
			user: req.user,
			layout: 'authenticated'
		});
	}
	else {
		res.render('home');
	}
});
app.use('/', authenticationRoutes);
app.listen(3000);

