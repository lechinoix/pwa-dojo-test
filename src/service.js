import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCEq39n_xZW0QtRIX4_Gfbm0fpB21eTjq0",
  authDomain: "pwadojo.firebaseapp.com",
  databaseURL: "https://pwadojo.firebaseio.com",
  projectId: "pwadojo",
  storageBucket: "pwadojo.appspot.com",
  messagingSenderId: "445295830164"
};

const firebaseApp = firebase.initializeApp(config);

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function() {
      return navigator.serviceWorker.ready;
    }).then(function(registration) {
      registration.pushManager.subscribe({userVisibleOnly: true}).then(function(sub) {
        var endpointSections = sub.endpoint.split('/');
        var subscriptionId = endpointSections[endpointSections.length - 1];
        var newKey = firebase.database().ref().child('token').push().key;
        firebase.database().ref('token/' + newKey).set({subscriptionId: subscriptionId});
        console.log('endpoint:', subscriptionId);
      });
    });
  navigator.serviceWorker.ready.then(function(registration) {
     console.log('Service Worker Ready');
  });
}

export const catsRef = firebaseApp.database().ref('pictures');
