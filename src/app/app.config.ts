import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),  provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"primerparcialaboiv","appId":"1:835810792396:web:3c292c089956e3e9e90369","storageBucket":"primerparcialaboiv.appspot.com","apiKey":"AIzaSyDe2IBtQQ2HmvHBNAvbgbB7eb5fzuKy0cQ","authDomain":"primerparcialaboiv.firebaseapp.com","messagingSenderId":"835810792396"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
