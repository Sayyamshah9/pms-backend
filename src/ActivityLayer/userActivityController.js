const getUserRecord = require("../BusinessLayer/getUserRecord");
const userLogin = require("../BusinessLayer/userLogin");
const userOnboarding = require("../BusinessLayer/userOnboarding");
const CONSTANTS = require("../CommonLayer/Contants");

const userActivityController = async (reqData) => {
  const { activityType, inputData } = reqData;

  switch (activityType) {
    case CONSTANTS.ACTIVITY_TYPE.USER_ONBOARDING:
      return await userOnboarding(inputData);
    case CONSTANTS.ACTIVITY_TYPE.USER_LOGIN:
      return await userLogin(inputData);
    // case CONSTANTS.ACTIVITY_TYPE.GET_USER_REC:
    //   return await getUserRecord(inputData);
  }
};

module.exports = userActivityController;
