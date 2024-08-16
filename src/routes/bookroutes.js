const {Router} = require ("express");
const bookRouter = Router();
const addBook = require("../controllers/addBook");
const getBook = require("../controllers/getBook");
const getAuthor = require("../controllers/getAuthor.js");
const updateBookAuthor = require("../controllers/updateBookAuthor.js");
const delBook = require("../controllers/delBook.js");

bookRouter.post("/addBook", addBook)

bookRouter.get("/listbook", getBook);

bookRouter.get("/showauthorsbooks", getAuthor);

bookRouter.put("/editbookauthor", updateBookAuthor);

bookRouter.delete("/delbook", delBook);

module.exports = bookRouter