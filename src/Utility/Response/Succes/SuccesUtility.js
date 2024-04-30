const responSucccesCreated = (res, data, message) => {
  return res.status(201).json({
    status: "success",
    message: message,
    error: message.error,
    data: data,
  });
};

const responeSuccesOk = (res, data, message) => {
  return res.status(200).json({
    status: "success",
    message: message,
    error: message.error,
    data: data,
  });
};

module.exports = {
  responSucccesCreated,
  responeSuccesOk,
};
