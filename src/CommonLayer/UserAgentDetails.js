const userAgent = require("useragent");

const getUserAgentDetails = (_uaReqHeader) => {
  let userAgentDetails = {};

  if (_uaReqHeader) {
    const parsedUa = userAgent.parse(_uaReqHeader);
    userAgentDetails = {
      Browser: parsedUa?.family,
      OS: parsedUa?.os?.family,
      Device: parsedUa?.device?.family,
    };
  } else {
    userAgentDetails.message = "No User Agent Details Found";
  }

  return userAgentDetails;
};

module.exports = getUserAgentDetails;
