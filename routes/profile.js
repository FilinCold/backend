const express = require('express');
const router = express.Router();
const controller = require('../controllers/profile');
const upload = require('../middleware/upload');

router.patch('/:id', upload.single('image'), controller.editProfile);


module.exports = router;

