const CONSTANTS = require("../CommonLayer/Contants");
const ResponseCls = require("../CommonLayer/ResponseCls");
const { find } = require("../DataLayer/dbQueries");

const userLogin = async (_reqData) => {
  const resInst = new ResponseCls();
  let resObj = null;
  let filter = {};
  const { loginId, password } = _reqData;

  if (loginId && password) {
    if (parseInt(loginId)) {
      filter = {
        phoneNumber: loginId,
      };
    } else {
      filter = {
        emailId: loginId,
      };
    }
    resObj = await find("Users", filter);
    if (resObj.length > 0) {
      resInst.data = {
        message:
          resObj[0]?.password === password
            ? "User Authenticated Successfully"
            : "Invalid Password",
      };
    } else {
      resInst.data = { message: "Invalid LoginId" };
    }
  } else {
    resInst.error = {
      message: "Input Params Failed - userLogin()",
    };
  }

  return resInst;
};
module.exports = userLogin;
