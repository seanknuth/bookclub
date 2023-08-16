const Book = require("../models/book.model");

//CRUD
module.exports = {

    //CREATE
    createBook: (req, res) => {
        Book.create(req.body)
            .then((newBook) => res.json(newBook))
            .catch((err) => 
                res.status(400).json({ err }));
    },

    //READ
    getAllBooks: (req, res) => {
        Book.find({})
            .then((allBooks) => {
                console.log(allBooks);
                res.json(allBooks);
            })
            .catch((err) => console.log(err));
    },

    getOneBook: (req, res) => {
        Book.findOne({_id: req.params.id})
            .then((oneBook) => {
                console.log(oneBook);
                res.json(oneBook);
            })
    },

    //UPDATE
updateBook: (req, res) => {
    Book.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true, runValidators: true}
        )
        .then((updatedBook) => {
            console.log(updatedBook);
            res.json(updatedBook);
        })
        .catch((err) => console.log(err))
    },

    //DELETE
    deleteBook: (req, res) => {
        Book.deleteOne({_id: req.params.id})
            .then((deletedBook) => {
                console.log(deletedBook);
                res.json(deletedBook)
            })
            .catch((err) => console.log(err))
    },









    











};

