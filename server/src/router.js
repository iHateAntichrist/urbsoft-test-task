/* eslint-disable import/extensions */
import express from 'express';

import validateData from './validateData.js';
import { getUsers } from './actions/getUsers.js';
import { addUser } from './actions/addUser.js';
import userModule from './models/user.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', validateData(userModule.newUserSchema), addUser);

export default router;
