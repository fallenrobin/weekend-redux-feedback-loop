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
    return (
        state + action.payload
        //NEED TO TEST: does this give me a usable number or an object?
    )
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
