const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user:id"
router.route("/user").get(userController.findAll);

router.route("/adduser").post(userController.create);

module.exports = router;
