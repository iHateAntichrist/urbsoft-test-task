/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { User } from '../models/user.js';

const getUsers = async (req, res) => {
  try {
    const data = await User.find();

    res.status(200).json(data);
  } catch (error) {
    console.error('Failed to fetch users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export { getUsers };
