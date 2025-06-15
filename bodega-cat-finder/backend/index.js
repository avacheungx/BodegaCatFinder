const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const bodegas = [
  { id: 1, name: "Bodega 1", lat: 40.7128, lng: -74.0060 },
  { id: 2, name: "Bodega 2", lat: 40.7138, lng: -74.0010 },
];

app.get('/api/bodegas', (req, res) => {
  res.json(bodegas);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});