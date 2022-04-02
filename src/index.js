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
        case 'ADD_COMMENT':
            feedbackObj.comments = action.payload;
            return state;
        default:
            return state;
    }
}


const store = createStore(
    combineReducers({
        scoreReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
