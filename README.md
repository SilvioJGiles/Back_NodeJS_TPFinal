# Back_NodeJS_TPFinal
Talento Tech - BackEnd NodeJS - Comisión 25024 - Trabajo Final
Alumno: Silvio J. Giles

Descripción
  Este proyecto es el "Proyecto Tat - Final", un backend desarrollado con Node.js y Express.js, utilizando Firebase Firestore como base de datos. Implementa un sistema de autenticación y gestión de productos.
________________________________________
Características Principales
  •	Autenticación de Usuarios: Permite el registro y el inicio de sesión para acceder a rutas protegidas.
  •	Gestión de Productos (CRUD): Funcionalidades para crear, leer, actualizar y eliminar productos.
  •	API RESTful: Diseño de endpoints siguiendo principios REST para una comunicación clara y estandarizada.
  •	Base de Datos NoSQL: Utiliza Firebase Firestore para el almacenamiento de datos flexible y escalable.
________________________________________
Tecnologías Utilizadas
Este proyecto está construido con las siguientes tecnologías clave:
  •	Node.js: Entorno de ejecución de JavaScript.
  •	Express.js: Framework web rápido y minimalista para Node.js.
  •	Firebase SDK: Para la interacción con Firebase Firestore y autenticación.
  o	firebase/firestore: Base de datos NoSQL.
  o	firebase/auth (implícito en la lógica de autenticación).
  •	JSON Web Tokens (JWT): Para la autenticación segura y la autorización de acceso a rutas protegidas.
  •	body-parser: Middleware para el análisis de cuerpos de solicitud HTTP.
  •	cors: Middleware para habilitar Cross-Origin Resource Sharing.
  •	dotenv: Para cargar variables de entorno desde un archivo .env.
________________________________________
Instalación y Uso

Prerrequisitos
•	Node.js (versión 16 o superior recomendada).
•	Una cuenta de Firebase con un proyecto configurado y las credenciales adecuadas.

1. Clonar el Repositorio
  git clone https://github.com/SilvioJGiles/Back_NodeJS_TPFinal
  cd Back_NodeJS_TPFinal

3. Instalación de Dependencias
  Instala todas las dependencias del proyecto:

  npm install

4. Configuración de Variables de Entorno
  Crea un archivo .env en la raíz del proyecto y configura tus credenciales de Firebase, JWT Secret y el puerto:

  PORT=5000
  FIREBASE_API_KEY=AIzaSyBWRt_tI-RkjylVGCJihqMQplSn2dbXtNE
  FIREBASE_AUTH_DOMAIN=tat-nodejs-25024.firebaseapp.com
  FIREBASE_PROJECT_ID=tat-nodejs-25024
  FIREBASE_STORAGE_BUCKET=tat-nodejs-25024.firebasestorage.app
  FIREBASE_MESSAGING_SENDER_ID=621593659031
  FIREBASE_APP_ID=1:621593659031:web:4ab71de771af71c2ac0bd2
  FIREBASE_MEASUREMENT_ID=G-E45X6KZBT9
  JWT_SECRET_KEY=esta_es_la_verdad_de_la_milanesa

Asegúrate de reemplazar los valores con tus propias credenciales de Firebase.

5. Iniciar el Servidor
  Para iniciar el servidor en modo de desarrollo (con recarga automática al detectar cambios):

  npm start

  El servidor se ejecutará en el puerto especificado en tu archivo .env (por defecto, http://localhost:5000).
________________________________________

Cómo Probar los Endpoints de la API

Se incluye un script de Python para probar la funcionalidad completa de la API, incluyendo la autenticación y las operaciones CRUD de productos.

1. Configuración del Entorno de Prueba
  Asegúrate de que tu servidor Node.js esté corriendo (npm start).

2. Guardar el Script de Prueba
  Desde el archivo llamado prueba_endpoints.py 

3. Instalar Dependencias de Python
  Si no tenés la biblioteca requests instalada en Python, tenés que instalarla 
  pip install requests

4. Ejecutar el Script de Prueba
  Desde la terminal o línea de comandos, navega hasta la carpeta y ejecuta:
  python prueba_endpoints.py
  El script imprimirá en la consola el estado de cada solicitud a la API, los códigos de respuesta y los datos recibidos.






