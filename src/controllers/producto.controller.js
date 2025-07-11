// TaT - Backend NodeJS - Comisión 25024 - Silvio J. Giles
// src/controllers/producto.controller.js

import productoService from "../services/producto.services.js";

// Obtiene todos los productos
const obtieneProductosCtrl = async (req, res) => {
  try {
    const productos = await productoService.obtieneProductosSrv();
    res.status(200).json({ message: 'Lista de productos', payload: productos });
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

// Obtiene un producto por su Id
const obtieneProductoPorIdCtrl = async (req, res) => {
  try {
    const id = req.params.id;
    const producto = await productoService.obtieneProductoPorIdSrv(id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json({ message: 'Producto encontrado', payload: producto });
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

// Crea un nuevo producto
const creaProductoCtrl = async (req, res) => {
  try {
    const { categoria, color, descrip, precio } = req.body;
    if (!categoria || !color || !descrip || !precio) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }

    const nuevoProducto = {
      categoria,
      color,
      descrip,
      precio: Number(precio),
    };

    await productoService.creaProductoSrv(nuevoProducto);
    res.status(201).json({ message: 'Producto creado con éxito!', payload: nuevoProducto });
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

// Actualiza un producto por su Id
const actualizaProductoCtrl = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    await productoService.actualizaProductoSrv(id, data);
    res.status(200).json({ message: 'Producto actualizado con éxito!' });
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

// Elimina un producto por su Id
const eliminaProductoCtrl = async (req, res) => {
  try {
    const id = req.params.id;
    await productoService.eliminaProductoSrv(id);
    res.status(200).json({ message: 'Producto eliminado con éxito!' });
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export default {
  obtieneProductosCtrl,
  obtieneProductoPorIdCtrl,
  creaProductoCtrl,
  actualizaProductoCtrl,
  eliminaProductoCtrl,
};
