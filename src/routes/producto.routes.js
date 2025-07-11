// TaT - Backend NodeJS - Comisión 25024 - Silvio J. Giles
// src/routes/producto.routes.js

import { Router } from 'express';
import productoController from '../controllers/producto.controller.js';
import { authentication } from '../middlewares/authentication.js';

const router = Router();

router.get('/', authentication, productoController.obtieneProductosCtrl);
router.get('/:id', authentication, productoController.obtieneProductoPorIdCtrl);
router.post('/', authentication, productoController.creaProductoCtrl);
router.put('/:id', authentication, productoController.actualizaProductoCtrl);
router.delete('/:id', authentication, productoController.eliminaProductoCtrl);

export default router;
