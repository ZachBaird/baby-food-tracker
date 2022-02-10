const createErrorResponse = (res, errStatus, message) => {
  res.status(errStatus);
  throw new Error(message);
};

module.exports = { createErrorResponse };