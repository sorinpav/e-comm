import firebase, { auth, db } from './firebase.utils';

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const createdAt = new Date();
    try {
      await userRef.set({ createdAt, ...additionalData });
    } catch (error) {
      console.log('Error creating user.', error.message);
    }
  }
  return userRef;
};

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  auth.signInWithPopup(provider).catch(error => {
    switch (error.code) {
      case 'auth/account-exists-with-different-credential':
        window.alert('');
        break;
      case 'auth/auth-domain-config-required':
        window.alert('');
        break;
      case 'auth/cancelled-popup-request':
        window.alert('');
        break;
      case 'auth/operation-not-allowed':
        window.alert('');
        break;
      case 'auth/operation-not-supported-in-this-environment':
        window.alert('');
        break;
      case 'auth/popup-blocked':
        window.alert('');
        break;
      case 'auth/popup-closed-by-user':
        window.alert('');
        break;
      case 'auth/unauthorized-domain':
        window.alert('');
        break;
      default:
        console.log('This is the default case.');
    }
  });
};
export const signUpWithEmail = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then()
    .catch(error => {
      switch (error.code) {
        case 'auth/email-already-in-use':
          window.alert('');
          break;
        case 'auth/invalid-email':
          window.alert('');
          break;
        case 'auth/operation-not-allowed':
          window.alert('');
          break;
        case 'auth/weak-password':
          window.alert('');
          break;
        default:
          console.log('This is the default case.');
      }
    });
};
export const signInWithEmail = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then()
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
          window.alert('Email is invalid. Please try another email address.');
          break;
        case 'auth/user-disabled':
          window.alert(
            'Your account was disabled by an admin. Please contact us to resolve this issue.'
          );
          break;
        case 'auth/user-not-found':
          window.alert(
            'Your records have not been found on our system. Please sign up.'
          );
          break;
        case 'auth/wrong-password':
          window.alert('Your login details are incorrect.');
          break;
        default:
          console.log('This is the default case.');
      }
    });
};
