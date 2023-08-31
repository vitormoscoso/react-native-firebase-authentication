// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkuEoMzyT7m8ZeMYoPFxcOnCXydJU5uK4",
  authDomain: "monitoramento-de-fossas.firebaseapp.com",
  databaseURL: "https://monitoramento-de-fossas-default-rtdb.firebaseio.com",
  projectId: "monitoramento-de-fossas",
  storageBucket: "monitoramento-de-fossas.appspot.com",
  messagingSenderId: "681908240230",
  appId: "1:681908240230:web:774ef199fe184aeea8d2a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
