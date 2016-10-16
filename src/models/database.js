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
                database: 'downstash'
            });  
        },

        /*
        **  Use Promise.disposer to dispose of connection when query is done 
        **  Must wrap all calls in a Promise.using call
        */
        getConnection() {
            return connectionPool.getConnectionAsync().disposer(connection => {
                connection.release();
            });
        },

        initialize(connection) {
            return connection.queryAsync(`
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
            `)
        }  
    }
};

export default Database();