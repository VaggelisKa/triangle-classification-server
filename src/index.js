const express = require('express');
const mongoose = require('mongoose');
const { json } = require('body-parser');

const classifyRouter = require('./routes/classify');

const app = express();

app.use(json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(
  'mongodb://mongo:27017/app-server',
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: true,
    useCreateIndex: true
  }
)
.then(() => console.log('MongoDB is connected!'))
.catch(err => console.log(err));

app.use(classifyRouter);

app.listen(4000, () => {
  console.log('Listening on 4000!!')
});
