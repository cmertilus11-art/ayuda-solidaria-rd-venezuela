/* ================================================================
   CONFIGURACIÓN DE FIREBASE — proyecto "ayuda-solidaria-ve"
   ================================================================
   Ya está conectado al proyecto real de Firebase. No necesitas tocar
   nada aquí salvo que crees un proyecto nuevo o regeneres la app web.

   ⚠️ Este archivo queda PÚBLICO en GitHub Pages (cualquiera puede
   verlo en el navegador) — eso es normal y esperado para apps web
   con Firebase. La apiKey no es secreta, no protege nada por sí
   sola. Lo que de verdad protege los datos son las REGLAS DE
   SEGURIDAD de Firestore (ver más abajo): asegúrate de haberlas
   publicado en la consola de Firebase, en Firestore Database >
   pestaña "Reglas". Mientras no las publiques, por defecto Firestore
   puede estar bloqueando todo (modo producción) o abierto a
   cualquier escritura/lectura (modo prueba) — ninguno de los dos es
   lo que quieres para este proyecto.

   Checklist pendiente en la consola de Firebase
   (https://console.firebase.google.com/project/ayuda-solidaria-ve):
   1. Compilación > Firestore Database > si no existe aún, créala
      (modo producción, región más cercana a tu audiencia).
   2. Pestaña "Reglas" > pega las reglas del bloque comentado al
      final de este archivo > Publicar.
================================================================ */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDrWr-k3jaZLLzFu5fZdxQRSQjcQTxa4mM",
  authDomain: "ayuda-solidaria-ve.firebaseapp.com",
  projectId: "ayuda-solidaria-ve",
  storageBucket: "ayuda-solidaria-ve.firebasestorage.app",
  messagingSenderId: "325246850398",
  appId: "1:325246850398:web:7e0a7773450c763e60ebcf",
  measurementId: "G-2HQ1XHTX1P",
};

/* ================================================================
   REGLAS DE FIRESTORE RECOMENDADAS (cópialas en la consola de
   Firebase > Firestore Database > Reglas):

   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Cualquiera puede LEER y CREAR (agregar) documentos.
       // Nadie puede editar ni borrar lo ya publicado.
       match /items/{itemId} {
         allow read: if true;
         allow create: if request.resource.data.name is string
                       && request.resource.data.name.size() > 0
                       && request.resource.data.name.size() < 200;
         allow update, delete: if false;
       }
       match /acopio/{centroId} {
         allow read: if true;
         allow create: if request.resource.data.nombre is string
                       && request.resource.data.nombre.size() > 0
                       && request.resource.data.pais is string;
         allow update, delete: if false;
       }
       match /reportes/{reporteId} {
         allow read: if true;
         allow create: if true;
         allow update, delete: if false;
       }
     }
   }

   Esto garantiza, a nivel de servidor, lo mismo que pide el
   proyecto: cualquiera puede agregar, nadie puede borrar o editar
   lo que otros ya publicaron.
================================================================ */
