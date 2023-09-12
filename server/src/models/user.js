import { Schema, model } from 'mongoose';
import Joi from 'joi';

// Регулярний вираз для електронної пошти
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// Регулярний вираз для імені
const NAME_REGEX = /^.{3,}$/;

const handleMongooseError = (error, data, next) => {
  const customError = new Error('Mongoose error'); // Створюємо новий об'єкт помилки

  customError.status = 400;
  next(customError);
};

// Схема користувача для зберігання в базі даних
const userSchema = new Schema({
  name: {
    type: String,
    match: NAME_REGEX,
    required: true,
  },
  email: {
    type: String,
    match: EMAIL_REGEX,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

// Застосування обробник помилок для події "save"
userSchema.post('save', handleMongooseError);

// Схема валідації даних, отриманих від клієнта
const newUserSchema = Joi.object({
  name: Joi.string().pattern(NAME_REGEX).required(),
  email: Joi.string().pattern(EMAIL_REGEX).required(),
  phone: Joi.string().required(),
});

// Створення моделі користувача
export const User = model('user', userSchema);

export default {
  User,
  newUserSchema,
};
