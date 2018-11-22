DROP KEYSPACE IF EXISTS udemy;

CREATE KEYSPACE IF NOT EXISTS udemy;

USE udemy;


DROP TABLE IF EXISTS udemy.courses;
CREATE TABLE udemy.users (
    user_id INT PRIMARY KEY,
    username TEXT,
    userPic TEXT,
    course_count INT,
    review_count INT
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

DROP TABLE IF EXISTS udemy.courses;
CREATE TABLE udemy.courses (
    course_id INT PRIMARY KEY,
    courseName TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

DROP TABLE IF EXISTS udemy.reviews;
CREATE TABLE udemy.reviews (
    review_id INT PRIMARY KEY,
    course_id INT,   
    user_id INT,
    rating FLOAT,
    review TEXT,
    date TEXT,
    upvotes INT,
    downvotes INT,
    reported INT,
    created_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP
);

COPY udemy.users (username, userPic, course_count, review_count) FROM 'C:\Users\Smashvin\Documents\Class Notes\New Git\student-feedback\database\users.csv'  WITH DELIMITER=',' AND HEADER=TRUE;
COPY udemy.courses (courseName) FROM 'C:\Users\Smashvin\Documents\Class Notes\New Git\student-feedback\database\courses.csv'  WITH DELIMITER=',' AND HEADER=TRUE;
COPY udemy.reviews (course_id, user_id, rating, review, date, upvotes, downvotes, reported) FROM 'C:\Users\Smashvin\Documents\Class Notes\New Git\student-feedback\database\reviews.csv'  WITH DELIMITER=',' AND HEADER=TRUE;