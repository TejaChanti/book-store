import express from 'express';
import bookService from '../service/BookService.js';

const router = express.Router();

// public 
router.post('/books', bookService.save)
router.get('/books', bookService.getAll)
router.get('/books/:id', bookService.getById)
router.patch('/books/:id', bookService.updateBook)
router.delete('/books/:id', bookService.deleteBook)

export default router