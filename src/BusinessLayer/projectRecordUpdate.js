const { ObjectId } = require("mongodb");
const { updateOne } = require("../DataLayer/dbQueries");

const projectRecordUpdate = async (_reqData) => {
  let filterObj = {};
  filterObj["_id"] = new ObjectId(_reqData?.filter?.id);
  const response = await updateOne("ProjectDocs", _reqData?.setData, filterObj);

  return response;
};

module.exports = projectRecordUpdate;
