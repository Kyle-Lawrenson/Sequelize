const Book = require ("../../db/models/bookmodel")

const getOneBookFrmAuthor = async (req, res) => {
    const result = await Book.findOne({
        where: {
            author: req.body.author
        }
    })
    const responseMessage = {
        msg: `showing one book by ${req.body.author}.`,
        books: result
    }
    res.status(200).send(responseMessage);
}

module.exports = getOneBookFrmAuthor