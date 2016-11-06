import Database from './database'
import User from './user'
import Promise from 'bluebird'

const Message = () => {
	return {
		getConversationByUsername(username1, username2, start, numMessages) {
			const selectQuery = (user1, user2, start, numMessages) => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync(`
						(
							SELECT * 
							FROM messages 
							WHERE ((user1=? AND user2=?) OR (user1=? AND user2=?)) 
							ORDER BY messageid DESC LIMIT ?, ?
						) ORDER BY messageid ASC
					`, [user1, user2, user2, user1, start, numMessages]);
				});
			};

			return Promise.all([User.getIdFromUsername(username1), User.getIdFromUsername(username2)]).then(userids => {
				return selectQuery(userids[0], userids[1], start, numMessages);
			});
		},

		getConversations(username) {
			const getUserIdQuery = userid => Promise.using(Database.getConnection(), connection => {
				return connection.queryAsync(`
					(SELECT DISTINCT user2 
					FROM messages WHERE user1=?)
					UNION 
					(SELECT DISTINCT user1 
					FROM messages WHERE user2=?)
				`, [userid, userid]);
			});

			const getLastRow = (userid1, userid2) => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync(`
						SELECT messagetime, user1, user2, message FROM messages 
						WHERE ((user1=? AND user2=?) OR (user1=? AND user2=?))
						ORDER BY messageid DESC LIMIT 0,1
					`, [userid1, userid2, userid2, userid1]);
				});
			}

			return User.getIdFromUsername(username)
				   .then(userid => {
				   		return getUserIdQuery(userid).then(userids => {
					   		return Promise.all([
					   			Promise.all(userids.map(user => {
									return getLastRow(userid, user.user2).then(data => Promise.resolve(data[0]));
								})),

								Promise.all(userids.map(user => {
									return User.getUsernameFromId(user.user2)
								})),
					   		])
					   		
					   });
				   })
				   .then(array => {
				   		for(let i = 0; i < array[0].length; i++) {
				   			array[0][i].user = array[1][i];
				   		}

				   		return Promise.resolve(array[0]);
				   });
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