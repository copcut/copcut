import Database from './database'
import User from './user'
import Promise from 'bluebird'

const Barber = () => {
	const getReviewData = id => {
		return Promise.using(Database.getConnection(), connection => {
			return connection.queryAsync('SELECT reviewnumber, averagerating FROM barbers WHERE id=?', id);
		}).then(data => Promise.resolve(data[0]));
	};

	return {
		addBarber(data) {
			const userData = {
				username: data.username,
				firstname: data.firstname,
				middlename: data.middlename,
				lastname: data.lastname,
				password: data.password,
				email: data.email,
				birthday: data.birthday,
				gender: data.gender
			};

			const barberData = {
				reviewnumber: 0,
				address: data.address,
				city: data.city,
				country: data.country,
				postcode: data.postcode,
				phonenumber: data.phonenumber,
				yearscut: data.yearscut,
				description: data.description
			};

			const setBarberId = id => {
				barberData.id = id;
				return barberData;
			};

			const insertIntoBarbers = values => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('INSERT INTO barbers SET ?', values);
				});
			};

			return User.addUser(userData)
					   .then(setBarberId)
					   .then(insertIntoBarbers);
		},

		updateBarber(username, data) {
			const updateInBarbers = id => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('UPDATE barbers SET ? WHERE id=?', [data, id]);
				});
			}
			
			return User.getIdFromUsername(username).then(updateInBarbers);
		},

		getBarber(username) {
			const getFromBarbers = id => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('SELECT * FROM barbers WHERE id=?', id);
				}).then(data => Promise.resolve(data[0]));
			}
			
			return User.getIdFromUsername(username).then(getFromBarbers);
		},

		removeBarber(username) {
			//on delete user it will cascade
			return User.getIdFromUsername(username).then(id => User.removeUserById(id));
		},

		updateReviewData(id, rating, oldRating, adding) {

			const updateQuery = data => {
				let totalStars = data.reviewnumber * data.averagerating;
				totalStars += (rating-oldRating);
				const reviewnumber = (adding) ? data.reviewnumber+1 : data.reviewnumber;
				const averagerating = totalStars / reviewnumber;

				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('UPDATE barbers SET reviewnumber=?, averagerating=? WHERE id=?', [reviewnumber, averagerating, id]);
				});
			}
			
			return getReviewData(id).then(updateQuery);
		},

		getBarbersFromCut(cut) {
			return Promise.using(Database.getConnection(), connection => {
				return connection.queryAsync(`
					SELECT 
						user.id as id, 
						user.username as username, 
						user.firstname as firstname,
						user.lastname as lastname,
						barber.address as address, 
						cuts.cutid as cutid, 
						cuts.cut as cut 
					FROM users as user 
					LEFT JOIN barbers as barber ON barber.id = user.id 
					LEFT JOIN barbercuts as cuts ON cuts.barberid = user.id 
					WHERE cut = ?
				`, cut);
			});
		}
	}
}

export default Barber();