const express = require('express');
const router = express.Router();
const postController = require('../Controller/postcontroller');


router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);


router.post('/', postController.createPost);

module.exports = router;
