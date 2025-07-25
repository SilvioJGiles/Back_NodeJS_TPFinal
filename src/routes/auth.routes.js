// TaT - Backend NodeJS - Comisión 25024 - Silvio J. Giles
// src/routes/auth.routes.js

import { Router } from 'express';
import { login } from '../controllers/auth.controller.js';

const router = Router();

router.post('/login', login);

export default router;
