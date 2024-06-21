const Tweet = require('../models/tweet');

exports.getAddTweet = (req, res) => {
    res.render('addTweet');
};

exports.postAddTweet = async (req, res) => {
    const { title, tweet } = req.body;
    console.log('Received data:', { title, tweet });
    try {
        const newTweet = new Tweet({ title, tweet, createdAt: new Date() });
        await newTweet.save();
        res.redirect('/tweets');
    } catch (error) {
        console.log('Error adding tweet:', error);
        res.status(500).send(`Error adding tweet: ${error.message}`);
    }
};

exports.getTweets = async (req, res) => {
    try {
        const tweets = await Tweet.find({});
        res.render('tweets', { tweets });
    } catch (error) {
        console.log('Error fetching tweets:', error);
        res.status(500).send(`Error fetching tweets: ${error.message}`);
    }
};

exports.deleteTweet = async (req, res) => {
    const { id } = req.params;
    try {
        await Tweet.findByIdAndDelete(id);
        res.redirect('/tweets');
    } catch (error) {
        console.log('Error deleting tweet:', error);
        res.status(500).send(`Error deleting tweet: ${error.message}`);
    }
};

exports.getEditTweet = async (req, res) => {
    const { id } = req.params;
    try {
        const tweet = await Tweet.findById(id);
        res.render('editTweet', { tweet });
    } catch (error) {
        console.log('Error fetching tweet for edit:', error);
        res.status(500).send(`Error fetching tweet for edit: ${error.message}`);
    }
};

exports.postEditTweet = async (req, res) => {
    const { id } = req.params;
    const { title, tweet } = req.body;
    try {
        await Tweet.findByIdAndUpdate(id, { title, tweet });
        res.redirect('/tweets');
    } catch (error) {
        console.log('Error updating tweet:', error);
        res.status(500).send(`Error updating tweet: ${error.message}`);
    }
};