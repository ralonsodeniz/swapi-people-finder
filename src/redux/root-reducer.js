import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import dataReducer from './reducers/dataReducer';
import modalReducer from './reducers/modalReducer';

const dataPersistConfig = {
  key: 'data',
  storage,
  whitelist: ['savedArray'],
};

const rootReducer = combineReducers({
  data: persistReducer(dataPersistConfig, dataReducer),
  modal: modalReducer,
});

export default rootReducer;
