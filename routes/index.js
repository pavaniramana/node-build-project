const express = require("express");
const contentRouter = require("./content");
const router = express.Router();


router.use("/", contentRouter);
module.exports = router;