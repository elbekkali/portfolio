import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMIlm3W8Q5fOaQo9491LH5Phb6CKzHZTk",
  authDomain: "portfolio-2308.firebaseapp.com",
  projectId: "portfolio-2308",
  storageBucket: "portfolio-2308.firebasestorage.app",
  messagingSenderId: "631154532000",
  appId: "1:631154532000:web:3bca32516fdff9ece433c5"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};