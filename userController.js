const User = require('../models/user');

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.getRegister = (req, res) => {
    res.render('register');
};

exports.postRegister = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const newUser = new User({ firstName, lastName, email, password });
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        console.log('Error registering user:', error);
        res.status(500).send('Error registering new user.');
    }
};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', { email, password });
    try {
        const user = await User.findOne({ email, password });
        console.log('User found:', user);
        if (user) {
            res.redirect('/add-tweet');
        } else {
            console.log('Invalid email or password');
            res.status(401).send('Invalid email or password.');
        }
    } catch (error) {
        console.log('Error logging in user:', error);
        res.status(500).send('Error logging in user.');
    }
};