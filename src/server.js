import Promise from 'bluebird'
import express from 'express'
import cookieParser from 'cookie-parser' 
import bodyParser from 'body-parser'

import passport from 'passport' 
import session from 'express-session' 
import passportLocal from 'passport-local'
import flash from 'connect-flash'

import Database from './models/database' 
import User from './models/user'
import Barber from './models/barber'
import Rating from './models/rating'

Database.connect();

const app = express();
const LocalStrategy = passportLocal.Strategy;

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
app.use(passport.initialize());
app.use(passport.session());


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

//Database.initialize();

/*
User.addUser({
	username: "ankushrayabhari6", 
	firstname: "Ankush", 
	middlename: null, 
	lastname: "Rayabhari", 
	password: "lol", 
	email: "ankush03@gmail.com", 
	birthday: new Date(1998, 6, 24),  
	gender: "M"
}).then(console.log);

User.removeUserById(5);

Barber.addBarber({
	username: "testbarber1",
	firstname: "barber",
	middlename: null,
	lastname: "barber",
	password: "barber",
	email: "barber1@barber.com",
	birthday: new Date(1998, 6, 24),
	gender: "F",
	reviewnumber: 0,
	address: "Anacapa Hall",
	city: "Santa Barbara",
	country: "USA",
	postcode: "95129",
	phonenumber: "14085551212",
	yearscut: 1,
	description: "holla at me for dank cuts"
}).then(console.log);

Barber.removeBarber("testbarber");
Barber.getBarbersFromCut("Pomp").then(console.log);

Barber.updateBarber("testbarber", {
	description: "holla at me for dank cuts 420 blaze"
});

User.getIdFromUsername("ankushrayabhari5").then(console.log);

const ratingData = {
	barberid: 10,
	userid: 3,
	rating: 3,
	reviewContent: "mofo fucked up my hair slightly less"    
};
Rating.addCut(ratingData).then(console.log);
*/
/*
Rating.updateReview(5, {
	rating: 2,
	reviewContent: "mofo fucked up my hair slightly less"
}).then(console.log);
*/
//Barber.getReviewData(10).then(console.log);

//app.use(express.static(__dirname+'/designs'));
//app.listen(3000);