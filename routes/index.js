const express = require("express");
const contentRouter = require("./content");
const router = express.Router();


router.use("/content", contentRouter);
module.exports = router;