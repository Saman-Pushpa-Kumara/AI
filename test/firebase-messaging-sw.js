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
    const title = payload.notification?.title || "Google Meet";
    const options = {
        body: payload.notification?.body || "New encrypted message received"
    };
    self.registration.showNotification(title, options);
});