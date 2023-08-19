const userOnboarding = require("../BusinessLayer/userOnboarding");

const userActivityController = (reqData) => {
  const activityType = reqData?.activityType;
  const reqBody = reqData?.inputData;

  switch (activityType) {
    case "user-onboarding":
      return userOnboarding(reqBody);
  }
};

module.exports = userActivityController;
