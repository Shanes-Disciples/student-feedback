// const Sequelize = require('sequelize');
// // const DbConfig = require('./pgindex.js');

// // const sequelize = new Sequelize('udemy', 'postgres', 'root', { dialect: 'postgres' });

// const sequelize = new Sequelize('postgres', 'postgres', 'root', 
//   {dialect: 'postgres'}, 
//   // {define: { timestamps: false }},
//   // { subQuery: false }
// );


// const Users = sequelize.define('users', {
//   user_id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   username: Sequelize.STRING,
//   userpic: Sequelize.STRING,
//   course_count: Sequelize.INTEGER,
//   review_count: Sequelize.INTEGER,

// });

// const Courses = sequelize.define('courses', {
//   course_id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   coursename: Sequelize.STRING,


// });

// const Reviews = sequelize.define('reviews', {
//   review_id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   course_id: Sequelize.INTEGER,
//   user_id: Sequelize.INTEGER,
//   rating: Sequelize.DECIMAL(10, 1),
//   review: Sequelize.STRING(600),
//   date: Sequelize.DATE,
//   upvotes: Sequelize.INTEGER,
//   downvotes: Sequelize.INTEGER,
//   reported: Sequelize.INTEGER,
// });

// Users.hasMany(Reviews, { foreignKey: 'user_id' });
// Reviews.belongsTo(Users, { foreignKey: 'user_id' });
// Courses.hasMany(Reviews, { foreignKey: 'course_id' });
// Reviews.belongsTo(Courses, { foreignKey: 'course_id' });

// module.exports = {
//   Users,
//   Courses,
//   Reviews,
//   sequelize,
// };
