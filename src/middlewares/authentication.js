// TaT - Backend NodeJS - Comisión 25024 - Silvio J. Giles
// src/midlewares/authentication.js

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'abcdefghijklmnopqrstuvwxyz';

export const authentication = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Token no proporcionado' });

  const token = authHeader.split(' ')[1]; // Bearer <token>
  if (!token) return res.status(401).json({ message: 'Token malformado' });

  jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido o expirado' });

    req.user = user; // si querés pasar info del usuario a la siguiente función
    next();
  });
};
