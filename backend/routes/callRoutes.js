const express = require('express');
const { getCalls, sendCalls, } = require('../controllers/callController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/',protect,getCalls)

router.post('/',protect, sendCalls)

router.put('/:id', protect, )


module.exports = router;