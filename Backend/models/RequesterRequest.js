const mongoose = require('mongoose');

// Schema for the RequesterRequest model
const PersonalDetailSchema = new mongoose.Schema({
  patientName:  {
    type: String,
    required: [true, 'First name is required'],
    minlength: [1, 'First name must be at least 1 character long'],
    maxlength: [50, 'First name cannot exceed 50 characters'],
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: ['male', 'female', 'other'],
  },
  contactNumber:  {
    type: String,
    required: [true, 'Contact number is required'],
    match: [/^\d{11}$/, 'Contact number must be 11 digits long'],
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
  dateOfBirth: String,
  bloodRequired: String,
  unitsRequired: String,
  bloodNeededDate: String,
  hospitalName: String,
  hospitalAddress: String,
  reasonForBlood: String,
  emergencyContactNumber:  {
    type: String,
    required: [true, 'Emergency contact number is required'],
    match: [/^\d{11}$/, 'Emergency contact number must be 11 digits long'],
  },
});

module.exports = mongoose.model('Requester', PersonalDetailSchema);
