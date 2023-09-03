const CONSTANTS = require("../CommonLayer/Constants");
const ResponseCls = require("../CommonLayer/ResponseCls");
const TimeStampsCls = require("../CommonLayer/TimeStamps");
const { validateTkn, verifyToken } = require("../CommonLayer/helper");
const { insertOne } = require("../DataLayer/dbQueries");

const projectInit = async (_reqData, _reqExtras) => {
  const resInst = new ResponseCls();
  const timeStampsInst = new TimeStampsCls();
  let collectionNamePro = CONSTANTS.COLLECTIONS.PROJECT_DOCS;

  const { reqHeaders, params } = _reqExtras;
  let response = null;
  let hdrTkn = (reqHeaders && reqHeaders?.authorization.split(" ")[1]) || "";

  if (_reqData) {
    const { isTknVerified, tokenPayload } = verifyToken(hdrTkn);
    _reqData = {
      ..._reqData,
      createdOn: timeStampsInst.getCreatedOn(),
      updatedOn: timeStampsInst.getUpdatedOn(),
    };
    if (isTknVerified) {
      try {
        response = await insertOne(collectionNamePro, _reqData);
        if (response) {
          resInst.data = resInst.getSanitizedRes("message", "Project Created");
        } else {
          resInst.error = resInst.getSanitizedRes(
            "message",
            "Project Init Fail"
          );
        }
      } catch (error) {}
    } else {
      resInst.error = resInst.getSanitizedRes("message", "Token Invalid");
    }
  } else {
    resInst.error = resInst.getSanitizedRes(
      message,
      "Input Params Failed - projectInit()"
    );
  }
  return resInst;
};

module.exports = projectInit;
