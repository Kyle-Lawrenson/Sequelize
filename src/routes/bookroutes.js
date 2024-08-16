const {Router} = require ("express");
const bookRouter = Router();
const addBook = require("../controllers/addBook");
const getBook = require("../controllers/getBook");
const getAuthor = require("../controllers/getAuthor.js");
const updateBookAuthor = require("../controllers/updateBookAuthor.js");
const delBook = require("../controllers/delBook.js");

bookRouter.post("/addBook", addBook)

bookRouter.get("/listBook", getBook);

bookRouter.get("/showAuthorsBooks", getAuthor);

bookRouter.put("/editBookAuthor", updateBookAuthor);

bookRouter.delete("/delBook", delBook);

module.exports = bookRouter