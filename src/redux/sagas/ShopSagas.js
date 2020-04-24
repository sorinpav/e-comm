import { takeLatest, call, put } from 'redux-saga/effects';
//takeEvery listens for every action of a specific type
import { db } from '../../firebase/firebase.utils';
import { convertCollectionsSnapshotToMap } from '../../firebase/Utils';
//import shop action types
import { FETCH_COLLECTIONS_START } from '../types/shopTypes';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from '../actions/shopActions';

export function* fetchCollectionsAsync() {
  yield console.log('i am fired');

  try {
    const collectionRef = db.collection('collections');
    const snapshot = yield collectionRef.get();
    //because of yield, it resolves into a promise that gets assigned to snapshot,
    //so no need for the .get().then() promise syntax

    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap)); //saga version of dispatch
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
