const userActivityController = require("../ActivityLayer/userActivityController");

const router = require("express").Router();

router.route("/").post((req, res) => {
  const reqData = req.body,
    reqParams = req.params || "";
  let response = null;
  try {
    response = userActivityController(reqData);
  } catch (error) {
    console.log(error);
  }
  res.json({
    data: response,
    error: null,
  });
});

module.exports = router;
