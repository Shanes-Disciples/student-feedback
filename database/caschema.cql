DROP KEYSPACE IF EXISTS udemy;

CREATE KEYSPACE IF NOT EXISTS udemy WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE udemy;


DROP TABLE IF EXISTS udemy.users;
DROP TABLE IF EXISTS udemy.courses;
DROP TABLE IF EXISTS udemy.reviews;

CREATE TABLE udemy.users (
    user_id INT PRIMARY KEY,
    username VARCHAR,
    userPic TEXT,
    course_count INT,
    review_count INT

);

CREATE TABLE udemy.courses (
    course_id INT PRIMARY KEY,
    courseName VARCHAR,

);

CREATE TABLE udemy.reviews (
    review_id INT PRIMARY KEY,
    course_id INT,   
    user_id INT,
    rating FLOAT,
    review VARCHAR,
    date VARCHAR,
    upvotes INT,
    downvotes INT,
    reported INT,
);


COPY udemy.users (user_id, username, userPic, course_count, review_count) FROM '/home/ash/Git/shane/student-feedback/database/users2.csv'  WITH DELIMITER=',' AND HEADER=TRUE;
COPY udemy.courses (course_id, courseName) FROM '/home/ash/Git/shane/student-feedback/database/courses2.csv'  WITH DELIMITER=',' AND HEADER=TRUE;
COPY udemy.reviews (review_id, course_id, user_id, rating, review, date, upvotes, downvotes, reported) FROM '/home/ash/Git/shane/student-feedback/database/reviews2.csv'  WITH DELIMITER=',' AND HEADER=TRUE;
