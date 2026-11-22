importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyD89l5DvOCYFIhjyRNVWq5upcbHqvh367U",
    authDomain: "massage-c0f44.firebaseapp.com",
    databaseURL: "https://massage-c0f44-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "massage-c0f44",
    storageBucket: "massage-c0f44.firebasestorage.app",
    messagingSenderId: "423050491790",
    appId: "1:423050491790:web:1b1549abbd3fa48450d6df"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Background message:', payload);
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
            if (list.length > 0) return list[0].focus();
            return clients.openWindow('./');
        })
    );
});

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));
