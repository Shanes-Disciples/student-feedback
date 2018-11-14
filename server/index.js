const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const bodyParser = require('body-parser');
const path = require('path');

const getReviewData = require('./serverModel.js');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/courses/:courseId', express.static(path.join(__dirname, '/../public/')));
app.use('/courses/:courseId', expressStaticGzip(path.join(__dirname, '/../public/'), {
  enableBrotli: true,
  customCompressions: [{
    encodingName: 'deflate',
    fileExtension: 'zz',
  }],
  orderPreference: ['br'],
}));

//this is the search
app.get('/:courseId/reviews', (req, res) => {
  const { courseId } = req.params;
  getReviewData(courseId, res);
});
/*
//make app.post
app.post('/:courseId/reviews', (req, res) => {
  const { courseId } = req.params;
  
})

//make app.put

//app.delete
*/
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
