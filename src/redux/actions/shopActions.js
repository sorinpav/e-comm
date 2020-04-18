import { UPDATE_COLLECTIONS } from '../types/shopTypes';

export const updateCollections = (collectionsMap) => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
