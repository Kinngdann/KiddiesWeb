import { combineReducers, createStore } from 'redux';
import sortReducer from '../redux_reducers/sortReducer'


const store = createStore(combineReducers({
    sort: sortReducer
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
  export default store;
