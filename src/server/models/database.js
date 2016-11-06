import mysql from 'mysql'
import Connection from 'mysql/lib/Connection'
import Pool from 'mysql/lib/Pool'
import Promise from 'bluebird'

/*
**  MySQL driver for node has no support for Promises
**  Use bluebird to promisify all the connection, pool and mysql functions
*/
Promise.promisifyAll(mysql);
Promise.promisifyAll(Connection.prototype);
Promise.promisifyAll(Pool.prototype);

const Database = () => {
    let connectionPool;
    return {
        connect() {
            connectionPool = mysql.createPool({
                connectionLimit : 100,
                host: 'localhost',
                user: 'testuser',
                password: 'testpassword',
                database: 'copcut'
            });  
        },

        /*  Returns a promise containing the connection object
        **  Use Promise.disposer to dispose of connection when query is done 
        **  Must wrap all calls in a Promise.using call
        */
        getConnection() {
            return connectionPool.getConnectionAsync().disposer(connection => {
                connection.release();
            });
        },

        //Run only once to initialize database tables
        initialize() {
            return Promise.using(this.getConnection(), connection => {
                return Promise.all([
                    connection.queryAsync(`
                        CREATE TABLE users (
                            id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            username VARCHAR(36) NOT NULL UNIQUE,
                            firstname VARCHAR(50) NOT NULL,
                            middlename VARCHAR(50),
                            lastname VARCHAR(50) NOT NULL,
                            password CHAR(60) BINARY NOT NULL,
                            email VARCHAR(320) NOT NULL UNIQUE,
                            birthday DATE NOT NULL,
                            gender CHAR(1) NOT NULL
                        );
                    `),

                    connection.queryAsync(`
                        CREATE TABLE barbers (
                            id INT(11) NOT NULL PRIMARY KEY,
                            reviewnumber INT(11),
                            averagerating INT(1),
                            profilepicture VARCHAR(255) NOT NULL DEFAULT 'default.png',
                            address VARCHAR(255) NOT NULL,
                            city VARCHAR(255),
                            country VARCHAR(255) NOT NULL,
                            postcode VARCHAR(15) NOT NULL,
                            phonenumber VARCHAR(50),
                            yearscut INT(1) NOT NULL,
                            description VARCHAR(500),
                            FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE
                        );
                    `),

                    connection.queryAsync(`
                        CREATE TABLE barbercuts (
                            cutid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            barberid INT(11) NOT NULL,
                            cut VARCHAR(100) NOT NULL,
                            FOREIGN KEY (barberid) REFERENCES barbers(id) ON DELETE CASCADE
                        );
                    `),

                    connection.queryAsync(`
                        CREATE TABLE ratings (
                            ratingid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            barberid INT(11) NOT NULL,
                            userid INT(11) NOT NULL,
                            cutdate DATETIME NOT NULL,
                            rating INT(1),
                            reviewContent TEXT,
                            FOREIGN KEY (barberid) REFERENCES barbers(id) ON DELETE CASCADE,
                            FOREIGN KEY (userid) REFERENCES users(id) ON DELETE CASCADE
                        );
                    `),

                    connection.queryAsync(`
                        CREATE TABLE messages (
                            messageid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            messagetime DATETIME NOT NULL,
                            user1 INT(11) NOT NULL,
                            user2 INT(11) NOT NULL,
                            message TEXT NOT NULL,
                            FOREIGN KEY (user1) REFERENCES users(id) ON DELETE CASCADE,
                            FOREIGN KEY (user2) REFERENCES users(id) ON DELETE CASCADE
                        );
                    `)
                ]);
            });
        }
    }
};

export default Database();