const express = require('express');
const tweetController = require('../controllers/tweetController');
const router = express.Router();

router.get('/add-tweet', tweetController.getAddTweet);
router.post('/add-tweet', tweetController.postAddTweet);
router.get('/tweets', tweetController.getTweets);

router.post('/delete-tweet/:id', tweetController.deleteTweet);

router.get('/edit-tweet/:id', tweetController.getEditTweet); 

router.post('/edit-tweet/:id', tweetController.postEditTweet); 

module.exports = router;
