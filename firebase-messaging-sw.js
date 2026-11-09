// أضف هذا الكود في ملف الـ Worker الخاص بك للتعامل مع طلب ملف الـ Service Worker
if (url.pathname === '/firebase-messaging-sw.js' || url.pathname === '/crm/firebase-messaging-sw.js') {
  const swCode = `
    importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
    importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

    firebase.initializeApp({
      apiKey: "AIzaSyBbLytLmCWW-cy3SY80Yz7HQdaqog5ONKE",
      authDomain: "youssef-4170d.firebaseapp.com",
      projectId: "youssef-4170d",
      storageBucket: "youssef-4170d.appspot.com",
      appId: "1:333881327588:android:e52a39b64cccd975f551f1"
    });

    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/3233/3233483.png'
      };
      self.registration.showNotification(notificationTitle, notificationOptions);
    });
  `;
  return new Response(swCode, {
    headers: { 'Content-Type': 'application/javascript' }
  });
}
