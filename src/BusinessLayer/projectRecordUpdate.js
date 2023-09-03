const { ObjectId } = require("mongodb");
const { updateOne } = require("../DataLayer/dbQueries");
const ResponseCls = require("../CommonLayer/ResponseCls");
const TimeStampsCls = require("../CommonLayer/TimeStamps");
const { verifyToken } = require("../CommonLayer/helper");

const projectRecUpdate = async (_reqData, _reqHeaders) => {
  let filterObj = {};
  let response = null;
  const { reqHeaders, params } = _reqHeaders;
  let hdrTkn = (reqHeaders && reqHeaders?.authorization.split(" ")[1]) || "";

  let reqInst = new ResponseCls();
  let timeStampInst = new TimeStampsCls();

  if (_reqData && _reqHeaders) {
    const { isTknVerified, tokenPayload } = verifyToken(hdrTkn);
    const { filter, setData } = _reqData;
    if (isTknVerified) {
      // rember to Get ID From Token Decoded
      filterObj["_id"] = filter && new ObjectId(filter?.id);
      try {
        response = await updateOne("ProjectDocs", setData, filterObj);
        reqInst.data = response;
      } catch (error) {
        reqInst.error = reqInst.getSanitizedRes("message", error);
      }
    } else {
      reqInst.error = reqInst.getSanitizedRes("message", "Invalid Token");
    }
  } else {
    reqInst.error = reqInst.getSanitizedRes(
      "message",
      "Input Params Failed - projectRecUpdate()"
    );
  }

  return reqInst;
};

module.exports = projectRecUpdate;
