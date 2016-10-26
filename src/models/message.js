import Database from './database'
import User from './user'
import Promise from 'bluebird'

const Message = () => {
	const selectQuery = (user1, user2) => Promise.using(Database.getConnection(), connection => {
		return connection.queryAsync('SELECT * FROM messages WHERE ((user1=? AND user2=?) OR (user1=? AND user2=?)) ORDER BY messageid', [user1, user2, user2, user1]);
	});

	return {
		getConversationByUsername(username1, username2) {
			return User.getIdFromUsername(username1).then(userid1 => {
				return User.getIdFromUsername(username2).then(userid2 => {
					return selectQuery(userid1, userid2);
				});
			});
		},

		getConversationById(username1, username2) {
			return selectQuery(userid1, userid2);
		},

		addMessage(username1, username2, message) {
			const insertQuery = (user1, user2) => {
				const messageData = {
					messagetime: new Date(),
					user1,
					user2,
					message
				};

				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('INSERT INTO messages SET ?', messageData);
				});
			};

			return User.getIdFromUsername(username1).then(userid1 => {
				return User.getIdFromUsername(username2).then(userid2 => {
					return insertQuery(userid1, userid2);
				});
			});

		}
	}
}

export default Message();