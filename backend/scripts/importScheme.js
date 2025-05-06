const mongoose = require('mongoose');
const fs = require('fs');
const Scheme = require('../models/scheme');

mongoose.connect('mongodb://127.0.0.1:27017/schemesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const data = JSON.parse(fs.readFileSync('../data/utilities.json', 'utf-8'));

const insertData = async () => {
  const schemes = [];

  for (const [name, values] of Object.entries(data)) {
    schemes.push(new Scheme({
      name,
      category: "utilities", // you can change this per category
      ...values
    }));
  }

  await Scheme.insertMany(schemes);
  console.log("Data inserted successfully!");
  mongoose.disconnect();
};

insertData();
