// TODO: use this store variable to create a store.
import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,compose
}
from 'redux';
import {authReducer} from './auth/auth.reducer';

const rootReducer = combineReducers({
  auth : authReducer
});

export const store = {};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
