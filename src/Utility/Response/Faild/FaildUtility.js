const responNotFound = (res, message, error) => {
  return res.status(404).json({
    status: "faild",
    message: message,
    error: error,
    data: null,
  });
};

const responBadRequest = (res, message, error) => {
  return res.status(400).json({
    status: "faild",
    message: message,
    error: error,
    data: null,
  });
};

const responeUnauthorized = (res, message, error) => {
  return res.status(401).json({
    status: "faild",
    message: message,
    error: error,
    data: null,
  });
};

const responeForbidden = (res, message, error) => {
  return res.status(403).json({
    status: "faild",
    message: message,
    error: error,
    data: null,
  });
};

const responeConflict = (res, message, error) => {
  return res.status(409).json({
    status: "faild",
    message: message,
    error: error,
    data: null,
  });
};

const responeServerError = (res, message, error) => {
  return res.status(500).json({
    status: "faild",
    message: message,
    error: error,
    data: null,
  });
};

const responeBadGateway = (res, message, error) => {
  return res.status(502).json({
    status: "faild",
    message: message,
    error: error,
    data: null,
  });
};

const responeServiceUnavailable = (res, message, error) => {
  return res.status(503).json({
    status: "faild",
    message: message,
    error: error,
    data: null,
  });
};

const responeGone = (res, message, error) => {
  return res.status(410).json({
    status: "faild",
    message: message,
    error: error,
    data: null,
  });
};

const responeNotAcceptable = (res, message, error) => {
  return res.status(406).json({
    status: "faild",
    message: message,
    error: error,
    data: null,
  });
};

module.exports = {
  responNotFound,
  responBadRequest,
  responeUnauthorized,
  responeForbidden,
  responeConflict,
  responeServerError,
  responeBadGateway,
  responeServiceUnavailable,
  responeGone,
  responeNotAcceptable,
};
