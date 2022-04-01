// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyCx3btGgZ37w_A2_c-xEzxGqvQ4lNuUtAg",
  authDomain: "ferreteria-front.firebaseapp.com",
  projectId: "ferreteria-front",
  storageBucket: "ferreteria-front.appspot.com",
  messagingSenderId: "1035948192769",
  appId: "1:1035948192769:web:6d50784949d755c6ebbc00"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
