const mongoose = require('mongoose');

// Schema for the RequesterRequest model
const PersonalDetailSchema = new mongoose.Schema({
  patientName: String,
  gender: String,
  contactNumber: String,
  email: String,
  bloodGroup: String,
  address: String,
  dateOfBirth: String,
  unitsRequired: String,
  bloodNeededDate: String,
  hospitalName: String,
  hospitalAddress: String,
  reasonForBlood: String,
  emergencyContactNumber: String,
});

module.exports = mongoose.model('Requester', PersonalDetailSchema);
