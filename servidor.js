const express = require('express');
const app = express();
const path = require('path');

const port = 3000; // Puedes cambiar el número de puerto si es necesario

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, './interfaz/index.html');
    res.sendFile(indexPath);
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
