import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const firebase = initializeApp(firebaseConfig);

export { firebase };
