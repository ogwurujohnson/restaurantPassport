const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

const app = express();
app.use(express.json());
app.use(helmet());
app.use(logger('dev'));
app.use(cors());

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
