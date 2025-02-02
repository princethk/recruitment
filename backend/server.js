const express = require('express');
const cors = require('cors');
const stageRoutes = require('./routes/stageRoutes');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', stageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});