const notFoundError = {
  status: 404,
  message: 'Review(s) not found at this time, kindly check back again',
};

const customErrors = (data, status) => ({
  message: `review of ${data} ${status}`,
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
