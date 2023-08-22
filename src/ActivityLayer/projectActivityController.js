const projectInit = require("../BusinessLayer/projectInit");

const projectActivityController = async (reqData) => {
  const activityType = reqData?.activityType;
  const reqIpData = reqData?.inputData || {};

  switch (activityType) {
    case "project-initialization":
      return await projectInit(reqIpData);
  }
};

module.exports = projectActivityController;
