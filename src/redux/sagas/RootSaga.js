import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './ShopSagas';
import { userSagas } from './UserSagas';

//same principle as the root reducer
export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
