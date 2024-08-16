const Author = require("../../db/models/authormodel")

const addAuthor = async (req, res) => {
    try {
        const result = await Author.create({
            name: req.body.name
        })

        console.log(result);

        res.status(201).json({
            msg: `${req.body.name} added to the database successfully`,
            Author: result
        })
    } catch (error) {
        console.log(error.errors[0].message);
        res.status(418).json({
            msg: "Error see error code",
            error: error.errors[0].messsage
        })
    }

}

module.exports = addAuthor;