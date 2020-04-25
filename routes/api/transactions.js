const router = require("express").Router();
const transactionsController = require("../../controllers/transactionsController");

// Matches with "/api/transactions"
router
    .route("/")
    .get(transactionsController.findAll)
    .post(transactionsController.create);

// Matches with "/api/transactions/:id"
router
    .route("/:id")
    .put(transactionsController.update)
    .delete(transactionsController.remove);

module.exports = router;
