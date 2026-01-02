importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");
// Ganti dengan config dari firebase_options.dart Anda (bagian web)
firebase.initializeApp({
 apiKey:"AIzaSyCcHDMNA9KYp5m7nTGcYW559MJCOf0Iz6M",
 authDomain:"my-flutter-project-id.firebaseapp.com",
 projectId:"my-flutter-project-id",
 storageBucket:"my-flutter-project-id.firebasestorage.app",
 messagingSenderId:"2569474194",
 appId:"1:2569474194:web:acc840e80b67220509564b",
 measurementId:"G-4KNTF9BZFD"});
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
console.log('[firebase-messaging-sw.js] Received background message ',payload);
const notificationTitle = payload.notification.title;
const notificationOptions = {
 body: payload.notification.body,
 icon:'/icons/Icon-192.png'// Ganti dengan path icon app anda
 };
return self.registration.showNotification(notificationTitle,
notificationOptions);
});