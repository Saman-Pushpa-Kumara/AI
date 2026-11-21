// firebase-messaging-sw.js
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

// PWA Install & Fetch Handler
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));
self.addEventListener('fetch', (e) => {
    if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
    e.respondWith(fetch(e.request).catch(() => new Response("Meet Secure Chat: Network Required.")));
});

// Background Notification Handler (Browser close කර ඇති විට)
messaging.onBackgroundMessage((payload) => {
    console.log('[SW] Background notification received:', payload);
});

// Notification එක click කළ විට App එක open කිරීම
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (const client of clientList) {
                if ('focus' in client) return client.focus();
            }
            return clients.openWindow('./');
        })
    );
});