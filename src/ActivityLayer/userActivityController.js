const userOnboarding = require("../BusinessLayer/userOnboarding");

const userActivityController = async (reqData) => {
  const activityType = reqData?.activityType;
  const reqBody = reqData?.inputData;

  switch (activityType) {
    case "user-onboarding":
      return await userOnboarding(reqBody);
  }
};

module.exports = userActivityController;
