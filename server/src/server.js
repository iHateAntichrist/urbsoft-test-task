/* eslint-disable import/extensions */
/* eslint-disable no-console */
import mongoose from 'mongoose';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import router from './router.js';

// Створення інстанції сервера Express
const app = express();
let logFormat;

if (app.get('env') === 'development') {
  logFormat = 'dev';
} else {
  logFormat = 'short';
}

// Додавання middleware
app.use(logger(logFormat));
app.use(cors());
app.use(express.json());
app.use('/api/users', router);

// Middleware для обробки запитів на неіснуючі ресурси (404 Not Found)
app.use((req, res) => {
  res.status(404).json({ message: '404 Error' });
});

// Middleware для обробки помилок (500 Internal Server Error)
app.use((err, req, res) => {
  const status = err.status || 500;
  const message = err.message || 'Internal server error';

  res.status(status).send(message);
});

const DB_API = 'mongodb+srv://urbsoft:LsfCs8Ig1m3wgnAk@cluster1.kwqdiyf.mongodb.net/?retryWrites=true&w=majority'
  || process.env.DB_API;
const PORT = process.env.PORT || 5000;

// Встановлення строгого режиму запитів до MongoDB
mongoose.set('strictQuery', true);

// Підключення до MongoDB
mongoose
  .connect(DB_API, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT);
    console.log('Connected to DB');
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
