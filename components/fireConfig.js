import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCAI1Qb0qX0juXoSBqOml1XWBdFHmq-aSg",
  authDomain: "ecommerce-distribuidora.firebaseapp.com",
  projectId: "ecommerce-distribuidora",
  storageBucket: "ecommerce-distribuidora.appspot.com",
  messagingSenderId: "445469113990",
  appId: "1:445469113990:web:899623c3d117b02a585b07",
  measurementId: "G-EKGTQHGJVF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;