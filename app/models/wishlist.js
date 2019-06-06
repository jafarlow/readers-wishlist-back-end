const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
  comment: {
    type: String,
  },
  read: {
    type: Boolean,
    default: false,
    required: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Wishlist', wishlistSchema)
