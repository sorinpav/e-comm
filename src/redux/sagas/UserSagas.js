import { takeLatest, put, all, call } from 'redux-saga/effects';
import { GOOGLE_SIGN_IN_START } from '../types/userTypes';
import { googleProvider } from '../../firebase/Auth';
import { createUserProfileDocument } from '../../firebase/Utils';
import { auth } from '../../firebase/firebase.utils';
import {
  googleSignInSucess,
  googleSignInFailure,
} from '../actions/userActions';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const snapshot = yield userRef.get();
    yield put(googleSignInSucess({ id: snapshot.id, ...snapshot.data() }));
    console.log(userRef);
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all(call(onGoogleSignInStart));
}
