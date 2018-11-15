# Project Name

The "reviews" module for the Udemy course page.


## Additional Routes

| Route/Endpoint                | Description           | Method  |
| ----------------------------- |:---------------------:| -------:|
| /:courseId/reviews/:reviewId  | get a specific review | GET     |
| /:courseId/reviews/           | add a new review      | POST    |
| /:courseId/reviews/:reviewId  | edit a review         | PATCH   |
| /:courseId/reviews/:reviewId  | delete a review       | DELETE  |

Stretch Goals:

| ----------------------------- |:---------------------:| -------:|
| /users/:userId                | get a specific user   | GET     |
| /users/                       | add a new user        | POST    |
| /users/:userId/               | edit a user           | PATCH   |
| /users/:userId/               | delete a user         | DELETE  |

## Related Projects

  - https://github.com/u-demo/header-sidebar-service
  - https://github.com/u-demo/students-also-bought-service
  - https://github.com/u-demo/instructors-service

## Usage
To run:
- run schema.sql to create SQL database (mysql -u [username] -p [password])
- npm run seed to seed database
- npm start to start server
- hosted on localhost:3001
- run npm run react to compile webapp 

### Installing Dependencies

From within the root directory:

npm install

