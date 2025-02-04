import { initializeApp, getApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBxcAhXtZTLxQWD-lQD_7GjJXDuXwqGBtA',
	authDomain: 'python-hints.firebaseapp.com',
	projectId: 'python-hints',
	storageBucket: 'python-hints.appspot.com',
	messagingSenderId: '1039460737782',
	appId: '1:1039460737782:web:c0d2c0d3489d7c35e70f89',
};

// Ініціалізуємо Firebase
let app;
try {
	app = initializeApp(firebaseConfig);
} catch (error) {
	console.error('Firebase initialization error:', error);
	if (error.code === 'app/duplicate-app') {
		app = getApp(); // Використовуємо існуючий екземпляр
	} else {
		throw error;
	}
}

// Ініціалізуємо Auth
const auth = getAuth(app);

// Ініціалізуємо Firestore
const db = getFirestore(app);

// Встановлюємо локальну персистентність для Firestore
enableIndexedDbPersistence(db).catch((err) => {
	if (err.code == 'failed-precondition') {
		console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
	} else if (err.code == 'unimplemented') {
		console.warn('The current browser does not support persistence.');
	}
});

// Встановлюємо локальну персистентність для Auth
setPersistence(auth, browserLocalPersistence)
	.then(() => {
		console.log('Auth persistence set to LOCAL');
	})
	.catch((error) => {
		console.error('Error setting auth persistence:', error);
	});

export { auth, db };
