import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackObj = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
}

//NEED TO WORK ON!
const scoreReducer = (state = feedbackObj, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            feedbackObj.feeling = action.payload;
            return state;
        case 'ADD_UNDERSTANDING':
            feedbackObj.understanding = action.payload;
            return state;
        case 'ADD_SUPPORT':
            feedbackObj.support = action.payload;
            return state;
        default:
            return state;
    }
}

// const feelingReducer = (state = 0, action) => {
//     if (action.type === 'ADD_FEELING') {
//         return state, action.payload;
//     } else {
//         return state
//     }
// }

const understandingReducer = (state = 0, action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return state, action.payload;
    } else {
        return state
    }
}

const supportReducer = (state = 0, action) => {
    if (action.type === 'ADD_SUPPORT') {
        return state, action.payload;
    } else {
        return state
    }
}

// const commentReducer = (state = '', action) => {

// }

const store = createStore(
    combineReducers({
        //add reducers and combineReducers
        // commentReducer,
        // supportReducer,
        // understandingReducer,
        // feelingReducer
        scoreReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
