import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaM7pGpAE2p9gqUUVOxj7qPkrTZ_gvtAY",
  authDomain: "react-firebase-test-aa597.firebaseapp.com",
  databaseURL: "https://react-firebase-test-aa597.firebaseio.com",
  projectId: "react-firebase-test-aa597",
  storageBucket: "react-firebase-test-aa597.appspot.com",
  messagingSenderId: "778952660561",
  appId: "1:778952660561:web:2e357f1ac1e200195d4a70"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
