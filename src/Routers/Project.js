const projectActivityController = require("../ActivityLayer/projectActivityController");

const router = require("express").Router();

router
  .route("/")
  .post(async (req, res) => {
    let response = null;
    let reqExtras = {};
    const reqData = req?.body || {};
    reqExtras.reqHeaders = req?.headers;
    response = await projectActivityController(reqData, reqExtras);
    res.json(response);
  })
  .put(async (req, res) => {
    let response = null;
    const reqExtras = {};
    const reqData = req?.body || {};
    reqExtras.reqHeaders = req?.headers;
    response = await projectActivityController(reqData, reqExtras);
    res.json(response);
  });
// .get(async (req, res) => {
//   const reqData = req?.body || {};
//   reqData.reqParams = req?.query || {};
//   let response = null;

//   try {
//     response = await projectActivityController(reqData);
//   } catch (error) {
//     console.log(error);
//   }
//   res.json({
//     data: response,
//     error: null,
//   });
// });

module.exports = router;
