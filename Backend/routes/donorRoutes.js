const express = require('express');
const router = express.Router();

const { donorRequest } = require('../controllers/DonorController');

router.post('/donor-req', donorRequest);

module.exports = router;
