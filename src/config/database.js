// TaT - Backend NodeJS - Comisión 25024 - Silvio J. Giles
// src/config/database.js

// Carga el archivo .env
import 'dotenv/config';

// Importa Firebase/Firestore
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configura Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Inicializa
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta
export { db };
