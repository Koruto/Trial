// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import {
  OAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  signInWithRedirect,
  getRedirectResult,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

const auth = getAuth();
console.log(auth);

// const provider = new firebase.auth.OAuthProvider(‘microsoft.com’);

const handleMicrosoftLogin = () => {
  // setLoader((prevState) => ({ ...prevState, microsoftLoading: true }));
  const provider = new firebaseConfig.auth.OAuthProvider('microsoft.com');
  firebaseConfig
    .auth()
    .signInWithPopup(provider)
    .then((data) => {
      console.log(data);
      // setLoader((prevState) => ({ ...prevState, microsoftLoading: false }));
    });
};

// function signUP() {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // User is signed in.
//       // IdP data available in result.additionalUserInfo.profile.
//       console.log(result.additionalUserInfo.profile);
//       // Get the OAuth access token and ID Token
//       const credential = OAuthProvider.credentialFromResult(result);
//       const accessToken = credential.accessToken;
//       const idToken = credential.idToken;
//       console.log(credential);
//       console.log(accessToken);
//       console.log(idToken);
//     })
//     .catch((error) => {
//       console.log(error);
//       // Handle error.
//     });
// }

// function signUP() {
//   signInWithRedirect(auth, provider);
//   getRedirectResult(auth)
//     .then((result) => {
//       // User is signed in.
//       // IdP data available in result.additionalUserInfo.profile.

//       // Get the OAuth access token and ID Token
//       const credential = OAuthProvider.credentialFromResult(result);
//       const accessToken = credential.accessToken;
//       const idToken = credential.idToken;
//     })
//     .catch((error) => {
//       // Handle error.
//       console.log(error);
//     });
// }

function signOUT() {
  signOut(auth)
    .then(() => {
      console.log('Logged Out');
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

document.querySelector('.test').addEventListener('click', handleMicrosoftLogin);
document.querySelector('.logOut').addEventListener('click', signOUT);
