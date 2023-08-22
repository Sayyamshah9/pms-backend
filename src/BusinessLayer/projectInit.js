const { insertOne } = require("../DataLayer/dbQueries");

const projectInit = async (_reqData) => {
  const response = await insertOne("ProjectDocs", _reqData);
  return response;
};

module.exports = projectInit;
