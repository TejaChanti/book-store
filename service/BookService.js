import Book from '../models/Book.js'

  const save = async (req, res) => {
   const book = new Book(req.body);
    try {
      await book.save();
      res.status(201).send(book);
    } catch (error) {
      res.status(400).send(error);
    }  
  }

  const getAll = async (req, res) => {
    try {
      const books = await Book.find({});
      res.status(200).send(books);
    } catch (error) {
      res.status(500).send();
    }
  }

  const getById = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).send();
      }
      res.send(book);
    } catch (error) {
      res.status(500).send();
    }
  }

  const updateBook = async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!book) {
        return res.status(404).send();
      }
      res.send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  const deleteBook = async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) {
        return res.status(404).send();
      }
      res.send(book);
    } catch (error) {
      res.status(500).send();
    }
  }


export default { save, getAll, getById, updateBook, deleteBook};