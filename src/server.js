require("dotenv").config();
const express = require ("express");
const bookRouter = require ("./routes/bookroutes");
const app = express();
app.use(express.json());
app.use(bookRouter);

const addBook = require("./controllers/addBook");
const getBook = require("./controllers/getBook");
// const updateBook = require("./controllers/updateBook");
// const delBook = require("./controllers/delBook");

const Book = require ("./db/models/bookmodel");

function syncTables() {
    Book.sync({alter:true})
}

const port = process.env.PORT || 5001;

app.get("/health", (req, res) => {
    res.status(200).json({
        msg: "Server API is healthy",
    })
});
syncTables();
app.listen(port, () => console.log(`Server running on port ${port}`));


app.post("/addbook", addBook);

app.get("/listbook", getBook);

// app.put("/book", updateBook);

// app.delete("/book", deleteBook);