// TaT - Backend NodeJS - Comisión 25024 - Silvio J. Giles
// src/utils/token-generator.js

import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

// Función para generar un token JWT
export const generateToken = (userData) => {
  const user = {
    id: userData.id,
    email: userData.email,
  };
  const expiration = { expiresIn: '1h' };
  
  return jwt.sign(user, secret_key, expiration);
};