import Database from './database'
import Promise from 'bluebird'
import bcrypt from 'bcryptjs'

Promise.promisifyAll(bcrypt);

const User = () => {
	const genHash = password => {
		return bcrypt.genSaltAsync(10).then(salt => {
			return bcrypt.hashAsync(password, 10);
		});
	}

	const setPasswordHash = data => {
		return genHash(data.password).then(passwordHash => {
			data.password = passwordHash;
			return Promise.resolve(data);
		});
	}

	return {
		addUser(data) {
			return setPasswordHash(data).then(data => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('INSERT INTO users SET ?', data);
				});
			});
		},

		updateUser(username, data) {
			let promise;

			if(data.password) {
				promise = setPasswordHash(data);
			}
			else {
				promise = Promise.resolve(data);
			}
			
			return promise.then(values => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('UPDATE users SET ? where username=?', [values, username]);
				});
			});
		},

		removeUser(username) {
			return Promise.using(Database.getConnection(), connection => {
				return connection.queryAsync('DELETE FROM users WHERE username=?', username);
			});
		},

		getUser(username) {
			return Promise.using(Database.getConnection(), connection => {
				return connection.queryAsync('SELECT * FROM users WHERE username=?', username).then(data => data[0]);
			});
		},

		checkPassword(username, password) {
			const comparePassword = passwordHash => {
				return bcrypt.compareAsync(password, passwordHash);
			}

			const databaseQuery = () => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('SELECT password FROM users WHERE username=?', [username]).then(data => data[0].password);
				});
			}

			return databaseQuery().then(comparePassword);	
		}
	}
}

export default User();