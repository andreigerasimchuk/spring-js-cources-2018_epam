const express = require('express');
const router = express.Router();

router.get('/items', (req, res) => {
  res.json({stub: "stub"});
});

module.exports = router;