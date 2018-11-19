const fs = require('fs');
const path = require('path');
const faker = require('faker');

// create two file paths, reviewPath and userPath
// create two .csv files for the two tables
const reviewFilePath = path.join(__dirname, 'reviews.csv');
const usersFilePath = path.join(__dirname, 'users.csv');

const userData = () => {
  const userCount = 1000
  const users = "";
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

const reviewDataGenerator = () => {
  const reviewCount = 1000;
  let reviewData = "";
  for (let i = 0; i < reviewCount; i += 1) {
    const courseId = faker.fake('{{commerce.productAdjective}}') + " " + faker.fake('{{commerce.department}}') + " " + faker.fake('{{name.jobArea}}'); 
    const userId = Math.floor(Math.random() * 1000) 
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

const seedReviews = () => {
  fs.writeFileSync(reviewFilePath, "");
  fs.appendFileSync(reviewFilePath, 'courseId,userId,rating,review,date,upvotes,downvotes,reported\r\n');
  for (let i = 0; i < 10000; i+= 1) {
    const reviewText = reviewDataGenerator();
    fs.appendFileSync(reviewFilePath, reviewText);
  }
};


//    users += (`${firstName} ${lastName},${userPic},${gender},${courseCount},${reviewCount}`);

const seedUsers = () => {
  fs.writeFileSync(userFilePath, "");
  fs.appendFileSync(userFilePath, 'Name,userPic,courseCount,reviewCount\r\n');
  for (let i = 0; i < 1000; i+= 1) {
    const userText = reviewDataGenerator();
    fs.appendFileSync(userFilePath, userText);
  }
};

seedReviews();


