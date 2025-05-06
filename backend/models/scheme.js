const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  name: String,
  category: String,
  url: String,
  details: String,
  benefits: [String],
  eligibility: [String],
  application_process: [String],
});

module.exports = mongoose.model('Scheme', schemeSchema);
