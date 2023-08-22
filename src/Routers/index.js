const router = require("express").Router();

router.use("/userActivity", require("./User"));
router.use("/projectActivity", require("./Project"));

module.exports = router;
