const mongoose = require('mongoose')
const Book = require('../models/book')


const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

//  authorSchema.pre('deleteOne',   function(next) {
//   const projectId = this.id;
//   Book.find({ author: projectId}, (err, books) => {
//     if (err) {
//       next(err)     
//     } else if (books.length > 0) {
//       next(new Error('This author has books still'))
//     } else {
      
//       next()
//     }
//   })
// })



module.exports = mongoose.model('Author', authorSchema)