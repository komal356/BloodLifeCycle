const mongoose = require('mongoose');

const PersonalDetailSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, 'First name is required'],
        minlength: [1, 'First name must be at least 1 character long'],
        maxlength: [30, 'First name cannot exceed 50 characters'],
    },
    lastName: {
        type: String,
        minlength: [0, 'Last name must be at least 1 character long'],
        maxlength: [30, 'Last name cannot exceed 50 characters'],
    },
    contactNo: {
        type: String,
        required: [true, 'Contact number is required'],
       
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: ['male', 'female', 'other'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Email address is invalid'],
    },
    bloodGroup: {
        type: String,
        required: [true, 'Blood group is required'],
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        minlength: [5, 'Address must be at least 5 characters long'],
    },
    donateBefore: {
        type: String,
        required: [true, 'Donation history is required'],
        enum: ['yes', 'no'],
    },
    lastDonationDate: {
        type: Date,
        required: function () {
            return this.donateBefore === 'yes'; // Only required if 'donateBefore' is 'yes'
        },
        validate: {
            validator: function (v) {
                return v ? v <= new Date() : true; // Last donation date cannot be in the future
            },
            message: 'Last donation date cannot be in the future',
        },
    },
    medication: {
        type: String,
        maxlength: [200, 'Medication information cannot exceed 200 characters'],
    },
    emergencyContactNo: {
        type: String,
        required: [true, 'Emergency contact number is required'],
       
    },
});

module.exports = mongoose.model('Donor', PersonalDetailSchema);
