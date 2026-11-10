const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Archivos propios del proyecto (HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Paquetes de NPM servidos localmente (en lugar de CDN)
const modulos = path.join(__dirname, 'node_modules');
app.use('/vendor/bootstrap', express.static(path.join(modulos, 'bootstrap', 'dist')));
app.use('/vendor/imask', express.static(path.join(modulos, 'imask', 'dist')));
app.use('/vendor/flatpickr', express.static(path.join(modulos, 'flatpickr', 'dist')));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
