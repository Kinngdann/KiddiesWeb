import { combineReducers, createStore } from 'redux';
import contestantReducer from '../redux_reducers/contestantReducer'
import sortReducer from '../redux_reducers/sortReducer'


const store = createStore(combineReducers({
    contestants: contestantReducer,
    sort: sortReducer
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
  export default store;
