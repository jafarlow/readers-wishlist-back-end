const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publicationYear: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  pageCount: {
    type: Number,
    required: true
  },
  _id: {
    type: Number,
    required: true
  },
  series: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Book', bookSchema)
