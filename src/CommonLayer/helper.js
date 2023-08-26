const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const CONSTANTS = require("./Constants");

const getEncryptedPassword = async (_password) => {
  let encryptedPassword = "";
  let passSalt = await bcryptjs.genSalt(11);
  encryptedPassword = await bcryptjs.hash(_password, passSalt);
  return encryptedPassword;
};

const verifyPassword = async (_password, _hashedPass) => {
  let isVerifiedPassword = false;
  isVerifiedPassword = await bcryptjs.compare(_password, _hashedPass);
  return isVerifiedPassword;
};

const genToken = (_payload) => {
  let token = "";
  const jwtSecretKey = CONSTANTS.SECRETS.JWT_SECRET;
  token = jwt.sign(_payload, jwtSecretKey);
  return token;
};

const verifyToken = (_token) => {
  let decodedTkn;
  let tokenRes = {
    isVerified: false,
    tokenPayload: "",
  };
  let jwtSecret = CONSTANTS.SECRETS.JWT_SECRET;
  decodedTkn = jwt.verify(_token, jwtSecret);
  if (decodedTkn) {
    tokenRes = { ...tokenRes, tokenPayload: decodedTkn, isVerified: true };
  }
  return tokenRes;
};

const getloginFltObj = (_loginId) => {
  let _fitler = {};
  if (parseInt(_loginId)) {
    _fitler = {
      phoneNumber: _loginId,
    };
  } else {
    _fitler = {
      emailId: _loginId,
    };
  }
  return _fitler;
};

module.exports = {
  getEncryptedPassword,
  verifyPassword,
  genToken,
  verifyToken,
  getloginFltObj,
};
