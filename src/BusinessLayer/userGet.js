const { ObjectId } = require("mongodb");
const { find } = require("../DataLayer/dbQueries");
const CONSTANTS = require("../CommonLayer/Constants");

const getUserRecord = async (_reqData) => {
  let filterObj = {};
  const collectionNameUsr = CONSTANTS.COLLECTIONS.USERS;
  filterObj["_id"] = new ObjectId(_reqData?.id);
  let response = await find(collectionNameUsr, filterObj);
  return response;
};

module.exports = getUserRecord;
