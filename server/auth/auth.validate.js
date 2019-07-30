function validateAuth(req, res, next) {
  const { body } = req;
  const status = Object.keys(body).length === 0 && body.constructor === Object;
  if (status) {
    return res.status(400).json({
      status: 400,
      message: 'missing project data',
    });
  }
  if (!body.firstname || !body.lastname || !body.email || !body.password || !body.city) {
    return res.status(400).json({
      status: 400,
      message: 'missing required fields, check documentation for guidance',
    });
  }
  return next();
}

module.exports = {
  validateAuth,
};
