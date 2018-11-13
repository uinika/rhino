const router = require("express").Router(),
  util = require("../common/util.js");

router.route("/dashboard/sheet").get((request, response) => {
  response.json(util.json("/dashboard/datas/sheet.json"));
});

router.route("/dashboard/statistic").get((request, response) => {
  response.json(util.json("/dashboard/datas/statistic.json"));
});

module.exports = router;
