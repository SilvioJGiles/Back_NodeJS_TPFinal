// TaT - Backend NodeJS - Comisión 25024 - Silvio J. Giles
// src/controllers/auth.controller.js

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const defaultUser = {
  id: 1,
  email: 'silvio.giles@gmail.com',
  password: 'aca_esta_la_clave',
};

export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Falta algún dato para el inicio de sesión' });
  }

  if (email === defaultUser.email && password === defaultUser.password) {
    const payload = { id: defaultUser.id, email: defaultUser.email };
    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ message: 'Usuario o contraseña no validos' });
  }
};
