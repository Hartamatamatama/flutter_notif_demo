importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");
// Ganti dengan config dari firebase_options.dart Anda (bagian web)
firebase.initializeApp({
 apiKey:"...",
 authDomain:"...",
 projectId:"...",
 storageBucket:"...",
 messagingSenderId:"...",
 appId:"...",
 measurementId:"..."});
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