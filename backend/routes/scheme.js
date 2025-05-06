const express = require('express');
const router = express.Router();
const Scheme = require('../models/scheme');

// Get all schemes by category
router.get('/:category', async (req, res) => {
  try {
    const category = decodeURIComponent(req.params.category).replace(/-/g, ' '); // Ensure correct category format
    console.log('Category:', category); // Log category to check if it's decoded properly
    const schemes = await Scheme.find({ category }); // Find schemes by category
    res.json(schemes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Get scheme by ID
router.get('/id/:id', async (req, res) => {
    try {
      const scheme = await Scheme.findById(req.params.id); // Use the correct method to fetch by ID
      if (!scheme) {
        return res.status(404).json({ message: 'Scheme not found' });
      }
      res.json(scheme);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = router;
