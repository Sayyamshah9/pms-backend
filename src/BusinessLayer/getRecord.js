const { ObjectId } = require("mongodb");
const { find } = require("../DataLayer/dbQueries");

const getRecord = async (_reqData) => {
  let filterObj = {};
  filterObj["_id"] = new ObjectId(_reqData?.id);
  const response = await find("ProjectDocs", filterObj);
  return response;
};

module.exports = getRecord;
