import Database from './database'
import Promise from 'bluebird'
import bcrypt from 'bcryptjs'
import { UsernameExistsError, EmailExistsError, UsernameEmailExistsError, UserNotFoundError } from '../config/errors'

//Add promise support to bcrypt
Promise.promisifyAll(bcrypt);

const User = () => {
	const genHash = password => {
		return bcrypt.genSaltAsync(10).then(salt => {
			return bcrypt.hashAsync(password, 10);
		});
	};

	const encryptPassword = data => {
		if(data.password) {
			return genHash(data.password).then(passwordHash => {
				data.password = passwordHash;
				return Promise.resolve(data);
			});
		}
		else {
			return Promise.resolve(data);
		}
	};

	const checkIfExists = (data, error, zero) => {
		let condition = (data.length == 0);
		condition = zero ? condition : !condition;
		if(condition) {
			throw new error();
		}
		else {
			return Promise.resolve(data);
		}
	};

	const checkUsernameOrEmailExists = (username, email) => {
		return Promise.using(Database.getConnection(), connection => {
			return connection.queryAsync('SELECT username, email FROM users WHERE (username=? OR email=?)', [username, email]);
		}).then(data => {
			if(data.length == 0) {
				//empty set we gucci
				return Promise.resolve(username);
			}
			else {
				if(data[0].username == username && data[0].email == email) {
					throw new UsernameEmailExistsError();
				}
				else {
					if(data[0].username == username) {
						throw new UsernameExistsError();
					}
					else if (data[0].email == email) {
						throw new EmailExistsError();
					}
				}
			}
		});
	};

	return {
		getIdFromUsername(username) {
			return Promise.using(Database.getConnection(), connection => {
				return connection.queryAsync('SELECT id FROM users WHERE username=?', username);
			})
			.then(data => checkIfExists(data, UserNotFoundError, true))
			.then(data => Promise.resolve(data[0].id));
		},

		addUser(data) {
			const userData = {
				username: data.username,
				firstname: data.firstname,
				middlename: data.middlename,
				lastname: data.lastname,
				password: data.password,
				email: data.email,
				birthday: new Date(data.birthday),
				gender: data.gender
			};

			return checkUsernameOrEmailExists(data.username, data.email)
				   .then(() => encryptPassword(userData))
				   .then(value => {
						return Promise.using(Database.getConnection(), connection => {
							return connection.queryAsync('INSERT INTO users SET ?', value);
						});
					}).then(rowDataPacket => Promise.resolve(rowDataPacket.insertId));
		},

		updateUser(username, data) {			
			const updateUserQuery = values => Promise.using(Database.getConnection(), connection => {
				return connection.queryAsync('UPDATE users SET ? where username=?', [values, username]);
			});
			
			return encryptPassword(data).then(updateUserQuery);
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
			})
			.then(data => Promise.resolve(data[0]));
		},

		checkPassword(username, password) {
			const getPasswordQuery = username => {
				return Promise.using(Database.getConnection(), connection => {
					return connection.queryAsync('SELECT password FROM users WHERE username=?', username);
				});
			};

			return getPasswordQuery(username)
				   .then(data => checkIfExists(data, UserNotFoundError, true))
				   .then(data => Promise.resolve(data[0].password))
				   .then(passwordHash => bcrypt.compareAsync(password, passwordHash));	
		}
	}
}

export default User();