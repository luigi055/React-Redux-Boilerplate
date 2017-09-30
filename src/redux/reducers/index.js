// @flow
import {combineReducers} from 'redux';

function greetReducer () {
  return 'Hello, There!';
}

const reducers = combineReducers ({
  greet: greetReducer,
});

export default reducers;
