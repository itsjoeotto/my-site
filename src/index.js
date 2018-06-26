import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    //custom redux dev tools options
});

const store = createStore(
    combineReducers({
        //reducers
    }),
    composeEnhancers(
        applyMiddleware(logger)
    )
);

ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));
registerServiceWorker();
