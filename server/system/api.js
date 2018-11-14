const SHA = require("sha.js");
const router = require("express").Router(),
  util = require("../common/util.js");

router.route("/system/login").post((request, response) => {
  const target = util.json("/system/datas/login.json");
  const username = request.body.username;
  const password = request.body.password;
  console.log("username", username);
  console.log("password", password);
  target.body = {
    username,
    token: SHA("sha256")
      .update(password, "utf8")
      .digest("hex"),
    permissions: "Admin"
  };
  response.json(target);
});

router.route("/system/logout").put((request, response) => {
  response.json(util.json("/system/datas/logout.json"));
});

module.exports = router;
