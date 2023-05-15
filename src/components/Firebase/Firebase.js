import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-rJu-RKSWVl9Zdc8iUJkWygUwUxoAd9w",
  authDomain: "newproject-30128.firebaseapp.com",
  projectId: "newproject-30128",
  storageBucket: "newproject-30128.appspot.com",
  messagingSenderId: "764859552747",
  appId: "1:764859552747:web:122c2f76afad7edc7f3fae"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
