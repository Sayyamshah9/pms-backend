const CONSTANTS = require("../CommonLayer/Constants");
const ResponseCls = require("../CommonLayer/ResponseCls");
const {
  verifyPassword,
  genToken,
  verifyToken,
  getloginFltObj,
} = require("../CommonLayer/helper");
const { find } = require("../DataLayer/dbQueries");

const userLogin = async (_reqData) => {
  const resInst = new ResponseCls();
  let resObj = null;
  let isUserAuthenticated = false;
  const collectionNameUsr = CONSTANTS.COLLECTIONS.USERS;
  let tokenPayload = "",
    token = "";
  let filter = {};

  const { loginId, password } = _reqData;

  if (loginId && password) {
    filter = getloginFltObj(loginId);

    resObj = await find(collectionNameUsr, filter);
    if (resObj.length > 0) {
      isUserAuthenticated = await verifyPassword(password, resObj[0]?.password);
      if (isUserAuthenticated) {
        tokenPayload = String(resObj[0]?._id.toString());
        token = genToken(tokenPayload);
        resInst.data = resInst.getSanitizedRes("token", token);
      } else {
        resInst.data = resInst.getSanitizedRes("message", "Invalid Password");
      }
    } else {
      resInst.data = resInst.getSanitizedRes("message", "Invalid LoginId");
    }
  } else {
    resInst.error = resInst.getSanitizedRes(
      "message",
      "Input Params Failed - userLogin()"
    );
  }

  return resInst;
};
module.exports = userLogin;
