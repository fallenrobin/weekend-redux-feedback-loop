import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = 0, action) => {
    if (action.type === 'ADD_FEELING') //NEED TO FIX!
    return state + action.payload
        //right now it's an object; need a number
    
}

// const understandingReducer = (state = 0, action) => {

// }

// const supportReducer = (state = 0, action) => {

// }

// const commentReducer = (state = '', action) => {

// }

const store = createStore(
    combineReducers({
        //add reducers and combineReducers
        // commentReducer,
        // supportReducer,
        // understandingReducer,
        feelingReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
