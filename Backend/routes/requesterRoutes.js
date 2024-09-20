const express = require('express');
const router = express.Router();
const { requesterRequest } = require('../controllers/RequestController');

router.post('/requester-req', requesterRequest);

module.exports = router;

