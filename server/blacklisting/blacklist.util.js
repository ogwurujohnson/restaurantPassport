const notFoundError = {
  status: 404,
  message: 'Blacklist(s) not found at this time, kindly check back again',
};

const customErrors = (data, status) => ({
  message: `blacklisted ${data} ${status}`,
});

const serverErrors = err => ({
  message: err.message,
  stack: err.stack,
});

module.exports = {
  notFoundError,
  customErrors,
  serverErrors,
};
