import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Navigation from './routes/route'


import { Provider } from 'react-redux'
import store from './controls/redux_store/store';
import { addContestant } from './controls/redux_actions/contestant';
import { sortContestants } from './controls/redux_actions/sort'
import nextId from 'react-id-generator';

store.subscribe(() => {
  const storeData = store.getState()
  console.log(sortContestants(storeData.contestants, storeData.sort))
})

const ID = () => {
  const id = nextId(' ')
  const pad = '0000'
  return (pad.substring(0, pad.length - id.length ) + id).split(' ').join('')
}

const person1 = {
  id: ID(),
  name: 'King Daniel',
  sex: 'male',
  age: '2',
  votes: {
    stageOne: 40,
    stageTwo: 10,
    stageThree: 10
  }
}

const person2 = {
  id: ID(),
  name: 'Ella Gabriel',
  sex: 'Female',
  age: '19',
  votes: {
    stageOne: 30,
    stageTwo: 10,
    stageThree: 10
  }
}

const person3 = {
  id: ID(),
  name: 'Anna Isabella',
  sex: 'female',
  age: '29',
  votes: {
    stageOne: 20,
    stageTwo: 10,
    stageThree: 10
  }
}

const person4 = {
  id: ID(),
  name: 'Peace Anih',
  sex: 'female',
  age: '22',
  votes: {
    stageOne: 10,
    stageTwo: 10,
    stageThree: 10
  }
}

store.dispatch(addContestant(person1))
store.dispatch(addContestant(person2))
store.dispatch(addContestant(person3))
store.dispatch(addContestant(person4))

// setTimeout(() => {
//   store.dispatch(sortContestants({searchWord: 'king'}))
// }, 3000);


ReactDOM.render(
    <Provider store = {store}>
      <Navigation />
    </Provider>,

  document.getElementById('root')
);








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
