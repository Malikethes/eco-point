import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin(() => {
  const rc = useRuntimeConfig().public;

  const firebaseConfig = {
    apiKey: rc.firebaseApiKey,
    authDomain: rc.firebaseAuthDomain,
    projectId: rc.firebaseProjectId,
    storageBucket: rc.firebaseStorageBucket,
    messagingSenderId: rc.firebaseMessagingSenderId,
    appId: rc.firebaseAppId
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  return {
    provide: {
      firebaseApp: app,
      firebaseAuth: auth,
      firebaseDb: db
    }
  };
});