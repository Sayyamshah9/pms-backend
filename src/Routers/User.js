const userActivityController = require("../ActivityLayer/userActivityController");
const getUserAgentDetails = require("../CommonLayer/UserAgentDetails");

const router = require("express").Router();

router.route("/").post(async (req, res) => {
  let response = null;
  const reqData = req.body;
  reqData.inputData.userAgentDetails = getUserAgentDetails(
    req.headers["user-agent"]
  );
  response = await userActivityController(reqData);
  res.json(response);
});

module.exports = router;
