// TaT - Backend NodeJS - Comisión 25024 - Silvio J. Giles
// src/services/producto.services.js

import {
  obtieneProductosMod,
  obtieneProductoPorIdMod,
  creaProductoMod,
  actualizaProductoMod,
  eliminaProductoMod,
} from '../models/producto.models.js';

const obtieneProductosSrv = async () => {
  return await obtieneProductosMod();
};

const obtieneProductoPorIdSrv = async (id) => {
  return await obtieneProductoPorIdMod(id);
};

const creaProductoSrv = async (product) => {
  return await creaProductoMod(product);
};

const actualizaProductoSrv = async (id, data) => {
  return await actualizaProductoMod(id, data);
};

const eliminaProductoSrv = async (id) => {
  return await eliminaProductoMod(id);
};

export default {
  obtieneProductosSrv,
  obtieneProductoPorIdSrv,
  creaProductoSrv,
  actualizaProductoSrv,
  eliminaProductoSrv,
};
