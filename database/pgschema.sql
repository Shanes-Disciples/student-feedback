DROP DATABASE IF NOT EXISTS udemy;

CREATE DATABASE IF NOT EXISTS udemy;


CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY, 
  username VARCHAR(50),
  userpic VARCHAR (100),
  course_count INTEGER,
  review_count INTEGER,
  createdat TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
  updatedat TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS courses (
  course_id SERIAL PRIMARY KEY,
  coursename VARCHAR (200),
  createdat TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
  updatedat TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reviews (
  review_id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(course_id),
  user_id INTEGER REFERENCES users(user_id),
  rating NUMERIC(2,1),
  review VARCHAR (600),
  date VARCHAR (75),
  upvotes INTEGER,
  downvotes INTEGER,
  reported INTEGER,
  createdat TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
  updatedat TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP
);

\COPY users (username, userpic, course_count, review_count) FROM 'C:\Users\Smashvin\Documents\Class Notes\New Git\student-feedback\database\users.csv' WITH (FORMAT CSV)
\COPY courses (coursename) FROM 'C:\Users\Smashvin\Documents\Class Notes\New Git\student-feedback\database\courses.csv' WITH (FORMAT CSV)
\COPY reviews (course_id, user_id, rating, review, date, upvotes, downvotes, reported) FROM 'C:\Users\Smashvin\Documents\Class Notes\New Git\student-feedback\database\reviews.csv' WITH (FORMAT CSV)

CREATE INDEX IF NOT EXISTS course_index ON courses (course_id);
CREATE INDEX IF NOT EXISTS user_index ON users (user_id)
CREATE INDEX review_index ON reviews (course_id, user_id);


-- ALTER SYSTEM SET random_page_cost TO '1.0';
-- ALTER SYSTEM SET shared_buffers TO '1GB';
-- ALTER SYSTEM SET effective_cache_size = '4GB';
/*
\COPY courses (coursename) FROM '/tmp/courses.csv' WITH (FORMAT CSV);
\COPY users (username, userpic, course_count, review_count) FROM '/tmp/users.csv' WITH (FORMAT CSV);
\COPY reviews (course_id, user_id, rating, review, date, upvotes, downvotes, reported) FROM '/tmp/reviews.csv' WITH (FORMAT CSV);


*/