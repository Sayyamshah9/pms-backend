const { insertOne } = require("../DataLayer/dbQueries");
const ResponseCls = require("../CommonLayer/ResponseCls");
const TimeStampsCls = require("../CommonLayer/TimeStamps");

const userOnboarding = async (_reqData) => {
  const resInst = new ResponseCls();
  const timeStampsInst = new TimeStampsCls();

  _reqData = {
    ..._reqData,
    created_at: timeStampsInst.getCreatedAt(),
    updated_at: timeStampsInst.getUpdatedAt(),
  };
  try {
    resInst.data = await insertOne("Users", _reqData);
  } catch (error) {
    resInst.error = error;
  }
  return resInst;
};

module.exports = userOnboarding;
