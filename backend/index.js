const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const schemeRoutes = require('./routes/scheme');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/schemesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.use('/api/schemes', schemeRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
