const Book = require("../db/models/bookmodel");

const updateAuthor = async (req, res) => {
  try {
    const result = await Book.update(
      { author: req.body.author },
      { where: { title: req.body.title } }
    );

    const updatedBook = await Book.findOne({
      where: { title: req.body.title },
    });

    res.status(201).json({
      message: `Author of the book: ${req.body.title} has been updated successfully`,
      book: updatedBook,
    });
  } catch (error) {
    console.log(error.errors[0]);
    res.status(418).json({ msg: "Error: see the error code", error: error });
  }
};

module.exports = updateAuthor;