const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const tweetRoutes = require('./routes/tweetRoutes');

const app = express();


const dbURI = 'mongodb+srv://sahartest:12345AA@cluster-test.zlazcr9.mongodb.net/tweetApp?retryWrites=true&w=majority';

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/', userRoutes);
app.use('/', tweetRoutes);

const PORT = 1500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});