// const { FirebaseError } = require("firebase/app");

importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js");

self.onnotificationclick = function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
      type: "window"
  }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (client.url == '/index' && 'focus' in client)
              return client.focus();
      }
      if (clients.openWindow)
          return clients.openWindow('/index');
  }));
};

firebase.initializeApp({
    
//   apiKey: "AIzaSyB6UWmp1EQFBTfr3s74b9Uk1xqEEr1ezI4",
//   authDomain: "push-menu.firebaseapp.com",
//   projectId: "push-menu",
//   storageBucket: "push-menu.appspot.com",
//   messagingSenderId: "762354488863",
//   appId: "1:762354488863:web:2339b1b3df20aa1ee8a72a"
apiKey: "AIzaSyB0u7KTMZTcb_Bz9PjBhnzJEGkHEzTLUwY",
authDomain: "fir-d3e02.firebaseapp.com",
projectId: "fir-d3e02",
storageBucket: "fir-d3e02.appspot.com",
messagingSenderId: "527043478941",
appId: "1:527043478941:web:0c74855e6173dd86ef1b74",
measurementId: "G-7SRF354EWS"
  
});


const messaging = firebase.messaging();
