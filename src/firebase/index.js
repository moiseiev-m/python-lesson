import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyA2cvL71kNjRQmuDFUJZ84BibjGQovmusY',
	authDomain: 'python-guide-b5348.firebaseapp.com',
	projectId: 'python-guide-b5348',
	storageBucket: 'python-guide-b5348.firebasestorage.app',
	messagingSenderId: '773573927615',
	appId: '1:773573927615:web:ffdcac9c65bf88965f5c0a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Set persistence to LOCAL
setPersistence(auth, browserLocalPersistence);

export { auth, db };
