const { ObjectId } = require("mongodb");
const { find } = require("../DataLayer/dbQueries");
const ResponseCls = require("../CommonLayer/ResponseCls");
const TimeStampsCls = require("../CommonLayer/TimeStamps");
const { verifyToken } = require("../CommonLayer/helper");

const getRecord = async (_reqData, _reqHeaders) => {
  let filterObj = {};
  let response = null;

  let reqInst = new ResponseCls();
  let timeStampInst = new TimeStampsCls();

  const { reqHeaders, params } = _reqHeaders;
  let hdrTkn = (reqHeaders && reqHeaders?.authorization.split(" ")[1]) || "";
  const { isTknVerified, tokenPayload } = verifyToken(hdrTkn);
  if (isTknVerified) {
    filterObj["_id"] = new ObjectId(_reqData?.id);
    try {
      response = await find("ProjectDocs", filterObj);
      reqInst.data = response;
    } catch (error) {
      reqInst.error = reqInst.getSanitizedRes("message", error);
    }
  } else {
    reqInst.error = reqInst.getSanitizedRes("message", "Invalid Token");
  }
  return reqInst;
};

module.exports = getRecord;
