const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        authorName: {
            type: String,
            required: true,
        },
        bookTitle: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        }

    }
);

const bookItem = mongoose.model('bookItem', bookSchema);
module.exports = bookItem;