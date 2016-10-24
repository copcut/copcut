/**
 * Created by Victor on 10/21/2016.
 */

/*
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

CREATE TABLE barbers (
    id INT(11) NOT NULL PRIMARY KEY,
    reviewnumber INT(11),
    averagerating INT(1),
    profilepicture VARCHAR(255) NOT NULL DEFAULT 'images/default.jpg',
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255),
    country varchar(255) NOT NULL,
    postcode INT(11) NOT NULL,
    phonenumber VARCHAR(10),
    yearscut INT(1) NOT NULL,
    description VARCHAR(500),
    FOREIGN KEY (id) REFERENCES users(id)
);

CREATE TABLE ratings (
    ratingid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    barberid INT(11) NOT NULL,
    userid INT(11) NOT NULL,
    cutdate DATETIME NOT NULL,
    rating INT(1),
    reviewContent TEXT,
    FOREIGN KEY (barberid) REFERENCES barbers(id),
    FOREIGN KEY (userid) REFERENCES users(id)
);

CREATE TABLE cuts (
    cutid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    barberid INT(11) NOT NULL,
    cut VARCHAR(100) NOT NULL,
    FOREIGN KEY (barberid) REFERENCES barbers(id)
);

CREATE TABLE messages (
    messageid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    messagetime DATETIME NOT NULL,
    user1 INT(11) NOT NULL,
    user2 INT(11) NOT NULL,
    message TEXT NOT NULL,
    FOREIGN KEY (user1) REFERENCES users(id),
    FOREIGN KEY (user2) REFERENCES users(id)
);