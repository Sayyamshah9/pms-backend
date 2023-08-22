const getUserRecord = require("../BusinessLayer/getUserRecord");
const userOnboarding = require("../BusinessLayer/userOnboarding");

const userActivityController = async (reqData) => {
  const activityType = reqData?.activityType;
  const reqBody = reqData?.inputData || reqData?.reqParams || {};

  switch (activityType) {
    case "user-onboarding":
      return await userOnboarding(reqBody);
    case "get-user-record":
      return await getUserRecord(reqBody);
  }
};

module.exports = userActivityController;
