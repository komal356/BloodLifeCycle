const Donor = require('../models/DonorRequest'); // Ensure this path is correct

exports.donorRequest = async (req, res) => {
  try {
    const donorRequest = new Donor(req.body); // Changed the variable name to follow standard convention
    const result = await donorRequest.save();
    res.send(result);
  } catch (error) {
    console.error('Error request:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
