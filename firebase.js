// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAM1ESCATXuYxmonJpf4stXjgMQkHrVyfY",
	authDomain: "instagram20-db1a3.firebaseapp.com",
	projectId: "instagram20-db1a3",
	storageBucket: "instagram20-db1a3.appspot.com",
	messagingSenderId: "874205708695",
	appId: "1:874205708695:web:acde52c0bfa1d89d6684d2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
