import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDBrLNwtGY54WSfgCA75SYTS2jKCE5JiRg',
  authDomain: 'e-comm-3a885.firebaseapp.com',
  databaseURL: 'https://e-comm-3a885.firebaseio.com',
  projectId: 'e-comm-3a885',
  storageBucket: 'e-comm-3a885.appspot.com',
  messagingSenderId: '434377097511',
  appId: '1:434377097511:web:d9f3178fc2549457816902',
  measurementId: 'G-9B6K8L2SWR'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
