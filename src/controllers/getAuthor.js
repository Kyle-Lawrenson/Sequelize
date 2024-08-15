const Book = require ("../db/models/bookmodel")

const getAuthor = async (req, res) => {
    const result = await Book.findAll({
        where: {
            author: req.body.author
        }
    })
    const responseMessage = {
        msg: "List of authors found.",
        books: result
    }
    res.status(200).send(responseMessage);
}

module.exports = getAuthor