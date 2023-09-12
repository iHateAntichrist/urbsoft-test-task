/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { User } from '../models/user.js';

// Додавання даних користувача до бд
const addUser = async (req, res) => {
  console.log('Дані, які надходять з клієнта:', req.body);
  const result = await User.create({ ...req.body });

  console.log('Received data:', req.body);

  console.log('Результат створення користувача:', result);
  res.status(201).json(result);
};

export { addUser };
