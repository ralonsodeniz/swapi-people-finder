import { combineReducers } from 'redux';

import dataReducer from './reducers/dataReducer';
import modalReducer from './reducers/modalReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  modal: modalReducer,
});

export default rootReducer;
