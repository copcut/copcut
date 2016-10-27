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
//Message.addMessage("ankushrayabhari5", "testbarber1", "").then(console.log);
//Message.getConversationByUsername("testbarber1", "ankushrayabhari5").then(console.log);