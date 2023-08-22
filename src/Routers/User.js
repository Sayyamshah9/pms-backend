const userActivityController = require("../ActivityLayer/userActivityController");

const router = require("express").Router();

router
  .route("/")
  .post(async (req, res) => {
    const reqData = req.body,
      reqParams = req.params || "";
    let response = null;
    try {
      response = await userActivityController(reqData);
    } catch (error) {
      console.log(error);
    }
    res.json({
      data: response,
      error: null,
    });
  })
  .get(async (req, res) => {
    const reqData = req.body;
    reqData.reqParams = req?.query || {};
    let response = null;
    try {
      response = await userActivityController(reqData);
    } catch (error) {
      console.log(error);
    }
    res.json({
      data: response,
      error: null,
    });
  });

module.exports = router;
