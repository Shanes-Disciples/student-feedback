# Project Name

The "reviews" module for the Udemy course page.


## Additional Routes

| Route/Endpoint                    | Description                            | Method  |
| --------------------------------- |:---------------------------------------| :------:|
| /:courseId/reviews/               | get all reviews for a specific course  | GET     |
| /:courseId/addReview/             | add a new review to a specific course  | POST    |
| /:courseId/editReview/:reviewId   | edit a review for a specific course    | PATCH   |
| /:courseId/deleteReview/:reviewId | delete a review for a specific course  | DELETE  |
| /users/:userId/reviews            | get all of a user's reviews            | GET     |

### Stretch Goals:

| Route/Endpoint                | Description               | Method  |
| ----------------------------- |:--------------------------| :------:|
| Come up with something        | That is a fitting         | Goal    |

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

