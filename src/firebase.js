import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyAPtFgYIzYI1_B-rVVIMhuLvTjGPyab4BU",
    authDomain: "m-city-600e5.firebaseapp.com",
    databaseURL: "https://m-city-600e5.firebaseio.com",
    projectId: "m-city-600e5",
    storageBucket: "m-city-600e5.appspot.com",
    messagingSenderId: "930663110197",
    appId: "1:930663110197:web:e0d59cbab63d909f76437c",
    measurementId: "G-XY5V5BB77K"
  };

  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

 //const firebaseDB = firebase.database();
 
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}



