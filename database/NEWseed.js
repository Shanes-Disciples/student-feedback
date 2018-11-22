const fs = require('fs');
const path = require('path');
const faker = require('faker');

const reviewFilePath = path.join(__dirname, 'reviews.csv');
const userFilePath = path.join(__dirname, 'users.csv');
const courseFilePath = path.join(__dirname, 'courses.csv');

const userData = () => {
  const userCount = 1000;
  let users = "";
  for (let i = 1; i <= userCount; i += 1) {
    const gender = Math.floor(Math.random() * 2);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName();
    const courseCount = Math.ceil(Math.random() * 30);
    const reviewCount = Math.ceil(Math.random() * courseCount);
    const picNum = Math.ceil(Math.random() * 99);
    const picGender = (gender === 0) ? 'men' : 'women';
    let userPic;
    Math.random() > 0.2 ? userPic = `https://randomuser.me/api/portraits/${picGender}/${picNum}.jpg` : userPic = firstName[0]+lastName[0];
    users += (`${firstName} ${lastName},${userPic},${courseCount},${reviewCount}`);
    users += '\r\n'
  }
  return users;
}

// let count = 1;
// let reviewCounter = () => {
//   count += 1;
// };
// reviewCounter();


const reviewDataGenerator = () => {
  const reviewCount = 1000;
  let reviewData = "";

  for (let i = 0; i < reviewCount; i += 1) {
    const courseId = Math.floor(Math.random() * 100000 + 1);
    const userId = Math.floor(Math.random() * 250000 + 1); 
    const review = faker.lorem.paragraph();
    const date = faker.date.past();
    const upvotes = Math.ceil(Math.random() * 100);
    const downvotes = Math.ceil(Math.random() * 20);
    const reported = Math.floor(Math.random() * 1.1);
    const fakeDistribution = Math.random() * 100;
    let rating;
    if (fakeDistribution >= 60) {
      rating = 5;
    } else if (fakeDistribution >= 50) {
      rating = 4.5;
    } else if (fakeDistribution >= 40) {
      rating = 4;
    } else if (fakeDistribution >= 25) {
      rating = 3.5;
    } else if (fakeDistribution >= 20) {
      rating = 3;
    } else if (fakeDistribution >= 15) {
      rating = 2.5;
    } else if (fakeDistribution >= 10) {
      rating = 2;
    } else if (fakeDistribution >= 5) {
      rating = 1.5;
    } else {
      rating = 1;
    }
    reviewData += `${courseId},${userId},${rating},${review},${date},${upvotes},${downvotes},${reported}`
    reviewData += '\r\n';
  }
  return reviewData;
};

const courseData = () => {
  const courseCount = 1000;
  let courses = "";
  for (let i = 0; i < courseCount; i += 1) {
    const courseName = faker.fake('{{commerce.productAdjective}}') + " " + faker.fake('{{commerce.department}}') + " " + faker.fake('{{name.jobArea}}'); 
    courses += `${courseName}`;
    courses += '\r\n';
  }
  return courses;
};

const seedReviews = () => {
  fs.writeFileSync(reviewFilePath, "");
  // fs.appendFileSync(reviewFilePath, 'course_id,user_id,rating,review,date,upvotes,downvotes,reported\r\n');
  for (let i = 0; i < 10000; i += 1) {
    const reviewText = reviewDataGenerator();
    fs.appendFileSync(reviewFilePath, reviewText);
  }
};

const seedUsers = () => {
  fs.writeFileSync(userFilePath, "");
  // fs.appendFileSync(userFilePath, 'username,userPic,course_count,review_count\r\n');
  for (let i = 0; i < 250; i += 1) {
    const userText = userData();
    fs.appendFileSync(userFilePath, userText);
  }
};

const seedCourses = () => {
  fs.writeFileSync(courseFilePath, "");
  // fs.appendFileSync(courseFilePath, 'courseName');
  for (let i = 0; i < 100; i += 1) {
    const courseName = courseData();
    fs.appendFileSync(courseFilePath, courseName);
  }
};

seedUsers();
seedCourses();
seedReviews();
