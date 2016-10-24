import Database from './database'
import Promise from 'bluebird'
import Barber from './barber'

const Rating = () => {
	const getExistingData = id => {
		return Promise.using(Database.getConnection(), connection => {
			console.log(id);
			return connection.queryAsync('SELECT barberid, rating FROM ratings WHERE ratingid=?', id);
		}).then(data => Promise.resolve(data[0]));
	}

	return {
		addCut(data) {
			const ratingData = {
				barberid: data.barberid,
				userid: data.userid,
				cutdate: new Date(),
				rating: data.rating,
				reviewContent: data.reviewContent      
			};
			
			const insertQuery = () => Promise.using(Database.getConnection(), connection => {
				return connection.queryAsync('INSERT INTO ratings SET ?', ratingData);
			}).then(rowDataPacket => Promise.resolve(rowDataPacket.insertId));


			return insertQuery().then(() => Barber.updateReviewData(ratingData.barberid, ratingData.rating, 0, true));
		},

		removeReview(ratingid) {
			return Promise.using(Database.getConnection(), connection => {
				return connection.queryAsync('DELETE FROM ratings WHERE ratingid=?', ratingid);
			});
		},

		updateReview(ratingid, data) {
			const ratingData = {
				rating: data.rating,
				reviewContent: data.reviewContent      
			};

			
			const updateQuery = () => Promise.using(Database.getConnection(), connection => {
				return connection.queryAsync('UPDATE ratings SET ? WHERE ratingid=?', [ratingData, ratingid]);
			});
			
			return getExistingData(ratingid).then(existingData => {
				console.log(existingData);
				return Barber.updateReviewData(existingData.barberid, ratingData.rating, existingData.rating, false).then(updateQuery);
			});
		},

		getCutsByBarber(username) {
			const getCutsByBarberQuery = id => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('SELECT * FROM ratings WHERE barberid=?', id);
				});
			}

			return User.getIdFromUsername(username).then(getCutsByBarberQuery);
		},

		getCutsByUser(username) {
			const getCutsByUserQuery = id => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('SELECT * FROM ratings WHERE userid=?', id);
				});
			}

			return User.getIdFromUsername(username).then(getCutsByUserQuery);
		},

		getReviewsByBarber(username) {
			const getReviewsByBarberQuery = id => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('SELECT * FROM ratings WHERE (barberid=? AND reviewContent IS NOT NULL)', id);
				});
			}

			return User.getIdFromUsername(username).then(getReviewsByBarberQuery);
		},

		getReviewsByUser(username) {
			const getReviewsByUserQuery = id => {
				Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('SELECT * FROM ratings WHERE (userid=? AND reviewContent IS NOT NULL)', id);
				});
			}

			return User.getIdFromUsername(username).then(getReviewsByUserQuery);
		}
	}
}

export default Rating();