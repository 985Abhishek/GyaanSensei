const express = require("express");
const { toggleLike } = require("../controllers/ProfileLikesController");

const router = express.Router();
router.post("/:profileId", toggleLike);

module.exports = router