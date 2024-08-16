const {Router} = require ("express");
const bookRouter = Router();
const addBook = require("../controllers/bookControllers/addBook.js");
const getBook = require("../controllers/bookControllers/getBook.js");
const getAuthor = require("../controllers/bookControllers/getAuthor.js");
const updateBookAuthor = require("../controllers/bookControllers/updateBookAuthor.js");
const delBook = require("../controllers/bookControllers/delBook.js");

bookRouter.post("/addBook", addBook)

bookRouter.get("/listBook", getBook);

bookRouter.get("/showAuthorsBooks", getAuthor);

bookRouter.put("/editBookAuthor", updateBookAuthor);

bookRouter.delete("/delBook", delBook);

module.exports = bookRouter