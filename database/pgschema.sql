-- const pg = require('pg');

-- const postgresDB = new pg.Pool({
--   user: 'postgres',
--   host: 'localhost',
--   database: 'postgres',
--   password: 'root',
-- });




CREATE TABLE users (
  userId INTEGER (9) NOT NULL AUTO_INCREMENT,
  firstName VARCHAR (50),
  lastName VARCHAR (50),
  courseCount INTEGER (5),
  reviewCount INTEGER (5),
  createdAt DATE,
  updatedAt DATE,
  PRIMARY KEY (userId)

)

 CREATE TABLE reviews (
  id INTEGER (9) NOT NULL AUTO_INCREMENT, 
  courseId VARCHAR (100),
  userID VARCHAR (100),
  rating INTEGER (2),
  review VARCHAR (600),
  date TIMESTAMP,
  upvotes INTEGER (5),
  downvotes INTEGER (5),
  reported INTEGER (1),
)

-- COPY FROM relative path Delimiter < look up that    E escape thing