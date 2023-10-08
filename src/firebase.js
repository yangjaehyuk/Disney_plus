// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDFhafDQm18SwlenD0RnAnGjr8QmmiH9nw',
  authDomain: 'react-disney-plus-app-2f4a1.firebaseapp.com',
  projectId: 'react-disney-plus-app-2f4a1',
  storageBucket: 'react-disney-plus-app-2f4a1.appspot.com',
  messagingSenderId: '969538703107',
  appId: '1:969538703107:web:7ec4435dcab6cec3476336',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
