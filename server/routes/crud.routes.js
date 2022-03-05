const express = require('express');
const router =express.Router();

const usrs = require('../controllers/crud.controller');

router.get('/',usrs.getUsers);
router.post('/',usrs.createUser);
router.get('/:id',usrs.getUser);
router.put('/:id',usrs.editUser);
router.delete('/:id',usrs.deleteUser);




module.exports = router;