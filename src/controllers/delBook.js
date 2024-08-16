const Book = require("../db/models/bookmodel")

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


//     if (result === null) {
//         const responseMessage = {
//             msg: "Book not found"
//         }
//         res.status(400).send(responseMessage);
//     } else if {
//         const responseMessage = {
//             msg: "Book has been deleted.",
//             dbresponse: result
//         }
//         res.status(200).send(responseMessage);
//     } else {
//         const responseMessage = {
//             msg: "HUH",
//             dbresponse: result
//         res.status(500).send(responseMessage);
//         console.log("UH WHAT",error)
//     }
// }

module.exports = delBook