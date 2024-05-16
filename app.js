import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/dataBaseConn.js'
import Bookrouter from './routes/BookRoute.js'

dotenv.config();
const app = express()
const PORT = process.env.PORT || 5000
const DATABASE_URL = process.env.DATABASE_URL

// CORS Policy
app.use(cors())

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// Load Routes
app.use("/api", Bookrouter)

app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);
