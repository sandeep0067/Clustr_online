const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const upload = require('../middleware/upload');

router.post('/create', upload.single('image'), postController.createPost);
router.get('/feed', postController.getFeed);

module.exports = router;
