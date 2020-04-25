const path = require("path");
const router = require("express").Router();
const transactionsRoute = require("./transactions");
const userRoutes = require("./user");

// Books routes match /api/books
router.use("/transactions", transactionsRoute);

// Google Routes match /api/books
router.use("/user", userRoutes);

// For anything else, render the html page
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;
