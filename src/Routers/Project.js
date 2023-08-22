const projectActivityController = require("../ActivityLayer/projectActivityController");

const router = require("express").Router();

router.route("/").post(async (req, res) => {
  const reqData = req?.body || {};
  const reqParams = req?.body || {};
  let response = null;

  try {
    response = await projectActivityController(reqData);
  } catch (error) {
    console.log(error);
  }
  res.json({
    data: response,
    error: null,
  });
});

module.exports = router;
