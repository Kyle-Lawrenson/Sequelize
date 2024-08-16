const Book = require("../../db/models/bookmodel")

const delBook = async (req, res) => {
    

    try {
        const result = await Book.destroy({ where: {title: req.body.title} });
        console.log(result);

        if (result === 1) {
          res.status(200).json({ message: "Book was deleted successfully" });
        } else {
          res.status(404).json({ error: "Book was not found" });
        }
      } catch (error) {
        res.status(500).json({ error: "Failed to delete book" });
        console.log("line 17", error)
      }
    };

module.exports = delBook