const notFoundError = {
  status: 404,
  message: 'Restaurant(s) not found at this time, kindly check back again',
};

const customErrors = data => ({
  message: `restaurant ${data} successfully`,
});

const serverErrors = err => ({
  status: 500,
  message: err.message,
  stack: err.stack,
});

module.exports = {
  notFoundError,
  customErrors,
  serverErrors,
};
