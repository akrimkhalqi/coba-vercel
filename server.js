const express = require('express');
const app = express();

// Mendapatkan port dari variabel lingkungan process.env.PORT
const port = process.env.PORT || 4000;

// Mendefinisikan rute untuk aplikasi Anda
app.get('/', (req, res) => {
  res.send('Halo dari server Anda!');
});

// Mulai mendengarkan port yang ditentukan oleh Vercel
app.listen(port, () => {
  console.log(`Server sedang berjalan di port ${port}`);
});
