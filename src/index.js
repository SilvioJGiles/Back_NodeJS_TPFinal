// TaT - Backend NodeJS - Comisión 25024 - Silvio J. Giles
// src/index.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRouter from './routes/auth.routes.js';
import productoRouter from './routes/producto.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas públicas
app.use('/auth', authRouter);

// Rutas protegidas
app.use('/api/producto', productoRouter);

// Rutas no definidas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server corriendo en puerto ${PORT}`);
});
