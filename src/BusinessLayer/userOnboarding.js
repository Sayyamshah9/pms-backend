const { insertOne, find } = require("../DataLayer/dbQueries");
const ResponseCls = require("../CommonLayer/ResponseCls");
const TimeStampsCls = require("../CommonLayer/TimeStamps");
const { getEncryptedPassword, genToken } = require("../CommonLayer/helper");
const CONSTANTS = require("../CommonLayer/Constants");

const checkIfUserAlreadyExist = async (_reqData) => {
  let ifExist = false;
  let _filter = {};
  const collectionNameUsr = CONSTANTS.COLLECTIONS.USERS;
  let { emailId, phoneNumber } = _reqData;
  _filter.emailId = emailId;
  try {
    const resData = await find(collectionNameUsr, _filter);
    ifExist = resData.length > 0;
  } catch (error) {
    // temp Fix -> Remove after crud functions are written generic
    console.log(error);
  }

  return ifExist;
};

const userOnboarding = async (_reqData) => {
  const resInst = new ResponseCls();
  let resObj = null;
  let token = "";
  let ifUserExist = false;
  const collectionNameUsr = CONSTANTS.COLLECTIONS.USERS;
  const timeStampsInst = new TimeStampsCls();

  if (_reqData) {
    ifUserExist = await checkIfUserAlreadyExist(_reqData);
    // allowed Duplicate Entries in local env
    if (process.env.ENVIRONMENT === "local" || !ifUserExist) {
      let { password } = _reqData;
      password = await getEncryptedPassword(password);
      _reqData = {
        ..._reqData,
        password,
        createdOn: timeStampsInst.getCreatedOn(),
        updatedOn: timeStampsInst.getUpdatedOn(),
      };
      try {
        resObj = await insertOne(collectionNameUsr, _reqData);
        if (resObj?.acknowledged) {
          token = genToken(resObj?.insertedId.toString());
          resInst.data = resInst.getSanitizedRes("token", token);
        } else {
          resInst.data = resInst.getSanitizedRes(
            "message",
            "User Onboarding Failed"
          );
        }
      } catch (error) {
        resInst.error = error;
      }
    } else {
      resInst.data = resInst.getSanitizedRes(
        "message",
        "User Already exists Sign In Instead"
      );
    }
  } else {
    resInst.error = {
      message: "Input Params Failed - userOnboarding()",
    };
  }
  return resInst;
};

module.exports = userOnboarding;
