const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Login-tut', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database Connected Successfully'))
.catch(err => console.error('Database connection failed:', err));

// Create Schema
const LoginSchema = new mongoose.Schema({
    name: String,
    password: String
});

// Export Model
const collection = mongoose.model('users', LoginSchema);

module.exports = collection;
