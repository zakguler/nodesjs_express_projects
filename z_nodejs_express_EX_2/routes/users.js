import express from "express";

import { getUser, getUsers, createUser, updateUser, deleteUser }
    from '../controllers/usersController.js';

const router = express.Router();

//==============================================================
// actually, all routes in here starting with '/users'
// GET
router.get('/', getUsers);


//==============================================================
// POST
router.post('/', createUser);


//==============================================================
// GET /:id
// get /users/2 ==> req.params {id: 2}
router.get('/:id', getUser);


//==============================================================
// PATCH /:id   <=== partial update
// patch /users/2 ==> req.params {id: 2}
router.patch('/:id', updateUser);


//==============================================================
// DELETE /:id
// delete /users/2 ==> req.params {id: 2}
router.delete('/:id', deleteUser);


export default router;