const CONSTANTS = {};

CONSTANTS.COLLECTIONS = {
  USERS: "Users",
  PROJECT_DOCS: "ProjectDocs",
};

CONSTANTS.ACTIVITY_TYPE = {
  // User Activities
  USER_ONBOARDING: "user-onboarding",
  USER_LOGIN: "user-login",
  GET_USER_REC: "get-user-record",

  // Project Activities
  PROJECT_INIT: "project-init",
  GET_REC: "get-record",
  UPDATE_REC: "update-record",
};

CONSTANTS.SECRETS = {
  JWT_SECRET: "9nrKfdjkMEXfzXCoc5TUzdRbsm3T2eoO",
};

module.exports = CONSTANTS;
