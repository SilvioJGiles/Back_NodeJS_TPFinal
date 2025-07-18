// TaT - Backend NodeJS - Comisión 25024 - Silvio J. Giles
// src/models/producto.models.js

import { db } from '../config/database.js';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore';

// Referencia a la colección "Productos"
const collProducto = collection(db, 'productos');

// Obtiene un producto por su Id
export async function obtieneProductoPorIdMod(id) {
  const productoDoc = await getDoc(doc(collProducto, id));
  if (productoDoc.exists()) {
    return { id: productoDoc.id, ...productoDoc.data() };
  } else {
    return null;
  }
}

// Obtiene todos los productos
export async function obtieneProductosMod() {
  const querySnapshot = await getDocs(collProducto);
  const productos = [];
  querySnapshot.forEach((doc) => {
    productos.push({ id: doc.id, ...doc.data() });
  });
  return productos;
}

// Crea un nuevo producto
export async function creaProductoMod(producto) {
  const docRef = await addDoc(collProducto, producto);
  
  // Retorno el Id del Producto creado
  return docRef.id;
}

// Actualiza un producto por su Id
export async function actualizaProductoMod(id, data) {
  const productoRef = doc(collProducto, id);
  await updateDoc(productoRef, data);
}

// Elimina un producto por su Id
export async function eliminaProductoMod(id) {
  await deleteDoc(doc(collProducto, id));
}


