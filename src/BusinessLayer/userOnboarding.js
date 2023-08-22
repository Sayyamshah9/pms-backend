const { insertOne } = require("../DataLayer/dbQueries");

const userOnboarding = async (_reqData) => {
  let response = await insertOne("Users", _reqData);
  return response;
};

module.exports = userOnboarding;
