const getRecord = require("../BusinessLayer/getRecord");
const projectInit = require("../BusinessLayer/projectInit");
const projectRecUpdate = require("../BusinessLayer/projectRecordUpdate");
const CONSTANTS = require("../CommonLayer/Constants");

const projectActivityController = async (reqData, reqExtras) => {
  const { activityType, inputData } = reqData;

  switch (activityType) {
    case CONSTANTS.ACTIVITY_TYPE.PROJECT_INIT:
      return await projectInit(inputData, reqExtras);
    case CONSTANTS.ACTIVITY_TYPE.UPDATE_REC:
      return await projectRecUpdate(inputData, reqExtras);
    case CONSTANTS.ACTIVITY_TYPE.GET_REC:
      return await getRecord(inputData, reqExtras);
    // case "delete-record":
    //   return await projectInit(inputData);
  }
};

module.exports = projectActivityController;
