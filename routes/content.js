const express = require("express");
const contentController = require("../controller/content")
const contentRouter = express.Router();


contentRouter.route("/content")
.get(contentController.getCategory);

contentRouter.route("/blog/:id")
.get(contentController.getId);

contentRouter.route("/content/:category")
    .get(contentController.getCategory); 


module.exports = contentRouter