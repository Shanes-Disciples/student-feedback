const fs = require('fs');
const path = require('path');
const faker = require('faker');


// const wstream = fs.createWriteStream('./data.file');

const filePath = path.join(__dirname, 'data.tsv');


const userCount = 10000000;

const userData = () => {
  fs.writeFileSync(filePath, '\n');
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
    let userData = (`username: ${firstName} ${lastName}, ${userPic}, ${gender}, ${courseCount}, ${reviewCount}`);
    fs.appendFileSync(filePath, userData)
  }
}



// const chooseRandomCourse = () => {
//   const course = Math.ceil(Math.random() * 100);
//   if (previousCourses.indexOf(course) === -1) {
//     return course;
//   }
//   chooseRandomCourse(previousCourses);
// };

// const reviewDataGenerator = (userId, reviewCount) => {
//   const previousCourses = [];
//   for (let i = 0; i < reviewCount; i += 1) {
//     const courseId = chooseRandomCourse(previousCourses);
//     previousCourses.push(courseId);
//     const review = faker.lorem.paragraph();
//     const date = faker.date.past();
//     const upvotes = Math.ceil(Math.random() * 100);
//     const downvotes = Math.ceil(Math.random() * 20);
//     const reported = Math.floor(Math.random() * 1.1);
//     const fakeDistribution = Math.random() * 100;
//     let rating;
//     if (fakeDistribution >= 60) {
//       rating = 5;
//     } else if (fakeDistribution >= 50) {
//       rating = 4.5;
//     } else if (fakeDistribution >= 40) {
//       rating = 4;
//     } else if (fakeDistribution >= 25) {
//       rating = 3.5;
//     } else if (fakeDistribution >= 20) {
//       rating = 3;
//     } else if (fakeDistribution >= 15) {
//       rating = 2.5;
//     } else if (fakeDistribution >= 10) {
//       rating = 2;
//     } else if (fakeDistribution >= 5) {
//       rating = 1.5;
//     } else {
//       rating = 1;
//     }
//     reviewData.push({
//       userId,
//       courseId,
//       rating,
//       review,
//       date,
//       upvotes,
//       downvotes,
//       reported,
//     });
//   }
//   return reviewData;
// };



userData();


