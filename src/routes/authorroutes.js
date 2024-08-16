const {Router} = require ("express");
const authorRouter = Router();
const addAuthor = require("../controllers/authorControllers/addAuthor.js");

authorRouter.post("/addAuthor", addAuthor)

module.exports = authorRouter