const mongoose = require('mongoose');

// Connection to MongoDB
mongoose.connect('mongodb://localhost:27017/basic-graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
})