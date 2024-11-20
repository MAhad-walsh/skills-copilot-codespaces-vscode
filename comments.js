// Create web server
// Create web server for comment
//=================================================

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle requests
router.get('/', commentController.comment_list); // Route to list all comments
router.get('/create', commentController.comment_create_get); // Route to display the comment creation form
router.post('/create', commentController.comment_create_post); // Route to handle comment creation
router.get('/:id/delete', commentController.comment_delete); // Route to delete a specific comment

// Export the router
module.exports = router;
