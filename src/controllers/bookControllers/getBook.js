const Book = require ("../../db/models/bookmodel")

const getBook = async (req, res) => {
    const result = await Book.findAll({})
    const responseMessage = {
        msg: "List of books found.",
        books: result
    }
    res.status(200).send(responseMessage);
}

module.exports = getBook