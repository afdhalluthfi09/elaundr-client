// step 7: setting notifikasi di service worker tapi dengan metode namespaced ada di doumentasi https://firebase.google.com/docs/cloud-messaging/js/receive?hl=id#web-namespaced-api_2
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBapvnjLuZsmW0zCJcruFtCbbw672FJ8E4",
    authDomain: "e-laundry-driver.firebaseapp.com",
    projectId: "e-laundry-driver",
    storageBucket: "e-laundry-driver.appspot.com",
    messagingSenderId: "1079880687729",
    appId: "1:1079880687729:web:e01c7254a6b1e15bd6fbd0"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });