// Import the functions you need from the SDKs you need
import {
  initializeApp,
  getApp,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import {
  OAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  connectAuthEmulator,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import {
  getFunctions,
  connectFunctionsEmulator,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-functions.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDmhc985ieJVAuPlZQUSKdY0dVP32LqgLs',
  authDomain: 'hiring-8203e.firebaseapp.com',
  projectId: 'hiring-8203e',
  storageBucket: 'hiring-8203e.appspot.com',
  messagingSenderId: '208319867959',
  appId: '1:208319867959:web:db5a24b41a37e1387423b2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const functions = getFunctions(getApp());
connectFunctionsEmulator(functions, 'localhost', 5500);

const auth = getAuth();
console.log(auth);
// connectAuthEmulator(auth, 'http://localhost:9099');

let provider = new OAuthProvider('microsoft.com');
provider.setCustomParameters({
  prompt: 'consent',
  tenant: '6d28e4fb-9074-4a0b-a5b8-9a89f632cc60',
});
function signUP() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      // User is signed in.
      // IdP data available in result.additionalUserInfo.profile.
      console.log(result.additionalUserInfo.profile);
      // Get the OAuth access token and ID Token
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;
      console.log(credential);
      console.log(accessToken);
      console.log(idToken);
    })
    .catch((error) => {
      console.log(error);
      // Handle error.
    });
}

function signOUT() {
  signOut(auth)
    .then(() => {
      console.log('Logged Out');
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}

document.querySelector('.test').addEventListener('click', signUP);
document.querySelector('.logOut').addEventListener('click', signOUT);
