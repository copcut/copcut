import Database from './database'
import Promise from 'bluebird'
import bcrypt from 'bcryptjs'

//Add promise support to bcrypt
Promise.promisifyAll(bcrypt);

const User = () => {
	const genHash = password => {
		return bcrypt.genSaltAsync(10).then(salt => {
			return bcrypt.hashAsync(password, 10);
		});
	}

	const setPasswordHash = data => {
		if(data.password) {
			return genHash(data.password).then(passwordHash => {
				data.password = passwordHash;
				return Promise.resolve(data);
			});
		}
		else {
			return Promise.resolve(data);
		}
	}

	return {
		getIdFromUsername(username) {
			return Promise.using(Database.getConnection(), connection => {
				return connection.queryAsync('SELECT id FROM users WHERE username=?', username);
			}).then(data => Promise.resolve(data[0].id));
		},

		addUser(data) {
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

			return setPasswordHash(userData).then(value => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('INSERT INTO users SET ?', value);
				});
			}).then(rowDataPacket => Promise.resolve(rowDataPacket.insertId));
		},

		updateUser(username, data) {			
			const updateUserQuery = values => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('UPDATE users SET ? where username=?', [values, username]);
				});
			}
			
			return setPasswordHash(data).then(updateUserQuery);
		},

		removeUser(username) {
			return Promise.using(Database.getConnection(), connection => {
				return connection.queryAsync('DELETE FROM users WHERE username=?', username);
			});
		},

		removeUserById(id) {
			return Promise.using(Database.getConnection(), connection => {
				return connection.queryAsync('DELETE FROM users WHERE id=?', id);
			});
		},

		getUser(username) {
			return Promise.using(Database.getConnection(), connection => {
				return connection.queryAsync('SELECT * FROM users WHERE username=?', username);
			}).then(data => Promise.resolve(data[0]));
		},

		checkPassword(username, password) {
			const getPasswordQuery = (username) => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('SELECT password FROM users WHERE username=?', username);
				}).then(data => Promise.resolve(data[0].password));
			}

			return getPasswordQuery(username)
				   .then(passwordHash => bcrypt.compareAsync(password, passwordHash));	
		}
	}
}

export default User();