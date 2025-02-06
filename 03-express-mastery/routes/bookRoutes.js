const express = require("express");
const booksController = require("../controllers/booksController.js");

const router = express.Router();

// getBooks
router.get("/books", booksController.getBooks);

// postBook
router.post("/books", booksController.postBook);

// updateBook
router.put("/books/:id", booksController.updateBook);

// delBook
router.delete("/books/:id", booksController.delBook);

module.exports = router;
