const { ObjectId } = require("mongodb");
const { find } = require("../DataLayer/dbQueries");

const getUserRecord = async (_reqData) => {
  let filterObj = {};
  filterObj["_id"] = new ObjectId(_reqData?.id);
  let response = await find("Users", filterObj);
  return response;
};

module.exports = getUserRecord;
