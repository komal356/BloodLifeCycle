const Requester = require('../models/RequesterRequest'); // Ensure this path is correct

exports.requesterRequest = async (req, res) => {
  try {
    console.log('Incoming request body:', req.body); // Log the incoming request
    const Request = new Requester(req.body);
    const result = await Request.save();
    res.send(result);
  } catch (error) {
    console.error('Error request:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
