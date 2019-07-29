const notFoundError = {
  status: 404,
  message: 'Visit(s) not found at this time, kindly check back again',
};

const customErrors = (data, status) => ({
  message: `mark ${data} as visited ${status}`,
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
