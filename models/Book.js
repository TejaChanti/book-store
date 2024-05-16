import mongoose from "mongoose";

// Defining Schema
const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true},
  summary: { type: String, required: true},

})

// Model
const BookModel = mongoose.model("Book", bookSchema)

export default BookModel