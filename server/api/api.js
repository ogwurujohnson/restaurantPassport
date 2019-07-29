const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

const authRoute = require('../auth/auth.route');
const userRoute = require('../users/users.route');

const app = express();
app.use(express.json());
app.use(helmet());
app.use(logger('dev'));
app.use(cors());

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to restaurant review api, kindly navigate to this link to explore the api /api/v1/ ',
  });
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});


module.exports = app;
