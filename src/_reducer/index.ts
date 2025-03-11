import {combineReducers} from 'redux';
import user_reducer from '../_reducer/user_reducer';

const rootReducer = combineReducers({
  user_reducer,
});

export default rootReducer;