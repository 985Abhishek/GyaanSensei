const express = require("express");
const { addComments } = require("../controllers/ProfileCommentsController");
const router = express.Router();

router.post("/:profileId", addComments);
module.exports = router;
