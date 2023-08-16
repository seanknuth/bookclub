const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book MUST have a title, silly goose"]
    },
    description: {
        type: String,
        minLength: [5, "Description must have at least 5 characters"]
    }
}, {timestamps: true});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;