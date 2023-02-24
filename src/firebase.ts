// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.React_APP_FIREBASE_KEY,
	authDomain: 'onstore-file-torage.firebaseapp.com',
	projectId: 'onstore-file-torage',
	storageBucket: 'onstore-file-torage.appspot.com',
	messagingSenderId: '574855657284',
	appId: '1:574855657284:web:c9886acae72be1bcf18911',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storageRef = getStorage(app);

export default storageRef;
