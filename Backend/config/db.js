const mongoose = require('mongoose');
//mongodb+srv://komalyaseen321:<db_password>@cluster0.jqvw3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect("mongodb+srv://komalyaseen321:komal123@cluster0.jqvw3.mongodb.net/BloodLifeCycle?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 60000, // Increase to 60 seconds
    socketTimeoutMS: 60000,         // Increase to 60 seconds
    connectTimeoutMS: 60000,        // Increase to 60 seconds
})
.then(() => {
    console.log('Database connection successful');
})
.catch(err => {
    console.error('Database connection error:', err);
});
module.exports = mongoose;



