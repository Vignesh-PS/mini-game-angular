importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBphi1mo9OKoegpdiAaeucuPiWm_8SQuMI",
  authDomain: "orion-2a931.firebaseapp.com",
  databaseURL: "https://orion-2a931-default-rtdb.firebaseio.com",
  projectId: "orion-2a931",
  storageBucket: "orion-2a931.firebasestorage.app",
  messagingSenderId: "409528690700",
  appId: "1:409528690700:web:249c78b702449064c0a629",
  measurementId: "G-339P19HF7F"
});

const messaging = firebase.messaging();
