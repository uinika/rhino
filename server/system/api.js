const router = require("express").Router(),
  util = require("../common/util.js");

router.route("/system/login").post((request, response) => {
  response.json(util.json("/system/data/login.json"));
});

router.route("/system/logout").put((request, response) => {
  response.json(util.json("/system/data/logout.json"));
});

module.exports = router;
