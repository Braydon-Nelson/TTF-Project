const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/user").get(userController.findOne);

router.route("/adduser").post(userController.create);

module.exports = router;
