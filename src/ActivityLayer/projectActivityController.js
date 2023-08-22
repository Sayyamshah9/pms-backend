const getRecord = require("../BusinessLayer/getRecord");
const projectInit = require("../BusinessLayer/projectInit");
const projectRecordUpdate = require("../BusinessLayer/projectRecordUpdate");

const projectActivityController = async (reqData) => {
  const activityType = reqData?.activityType;
  const reqIpData = reqData?.inputData || reqData?.reqParams || {};

  switch (activityType) {
    case "project-initialization":
      return await projectInit(reqIpData);
    case "get-record":
      return await getRecord(reqIpData);
    case "update-record":
      return await projectRecordUpdate(reqIpData);
    // case "delete-record":
    //   return await projectInit(reqIpData);
  }
};

module.exports = projectActivityController;
