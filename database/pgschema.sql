DROP DATABASE IF NOT EXISTS udemy;
CREATE DATABASE udemy;

 \c udemy;


CREATE TABLE IF NOT EXISTS users (
  userId SERIAL PRIMARY KEY, 
  username VARCHAR(50),
  userPic VARCHAR (100),
  courseCount INTEGER,
  reviewCount INTEGER,
  createdAt TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE IF NOT EXISTS reviews (
  reviewId SERIAL PRIMARY KEY,
  courseId INTEGER REFERENCES courses(courseId),
  userId INTEGER REFERENCES users(userId),
  rating NUMERIC(2,1),
  review VARCHAR (300),
  date VARCHAR (25),
  upvotes INTEGER,
  downvotes INTEGER,
  reported INTEGER,
  createdAt TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS courses (
  courseId SERIAL PRIMARY KEY,
  courseName VARCHAR (200),
  createdAt TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP
);

/COPY users (username, userPic, courseCount, reviewCount) FROM 'C:\Users\Smashvin\Documents\Class Notes\New Git\student-feedback\database\users.csv' WITH (FORMAT CSV)
/COPY review (courseId, userId, rating, review, date, upvotes, downvotes, reported) FROM 'C:\Users\Smashvin\Documents\Class Notes\New Git\student-feedback\database\reviews.csv' WITH (FORMAT CSV)
/COPY courses (courseName) FROM 'C:\Users\Smashvin\Documents\Class Notes\New Git\student-feedback\database\courses.csv' WITH (FORMAT CSV)
