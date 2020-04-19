import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAIL,
} from '../types/shopTypes';
import { db } from '../../firebase/firebase.utils';
import { convertCollectionsSnapshotToMap } from '../../firebase/Utils';

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});
export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: FETCH_COLLECTIONS_FAIL,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = db.collection('collections');

    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
