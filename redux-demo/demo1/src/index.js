import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux';
import Counter from './components/Counter';
import counterReducers from './reducers'

const store = createStore(counterReducers);
window.store = store;

const root = document.getElementById('root');

const render = () => ReactDOM.render(
 <Counter
   value={store.getState()}
   onIncrement={function(){return store.dispatch({type:'ADD'})}}
   onDecrement={()=>store.dispatch({type:'SUBTRACT'})}
 />,
  root
)
render();
store.subscribe(render)