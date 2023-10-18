import express from 'express';
import { getUsers, createUser, getUserById, deleteUserById, updateUserById } from '../controllers/users.js';

// Intialise the router
const router = express.Router();

// all routes start with /users
router.get('/', getUsers)
router.post('/', createUser)
// id stored in req.params -> route parameters
router.get('/:id', getUserById)
router.delete('/:id', deleteUserById)
router.patch('/:id', updateUserById)

// make it exportable
export default router;