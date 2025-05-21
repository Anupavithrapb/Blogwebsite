const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/db');
const postRoutes = require('./Route/postroute');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
