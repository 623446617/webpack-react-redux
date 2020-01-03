import React from 'react';
import ReactDom from 'react-dom';
import BaseRouter from './base-router';
import {AppContainer} from 'react-hot-loader';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './app/reducers';
import {Provider} from 'react-redux';

const store = createStore(reducers, applyMiddleware(thunk));

const render = (App) => {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <App/>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
}

render(BaseRouter);

if (module.hot) {
    module.hot.accept('./base-router', () => {
        render(require('./base-router').default);
    });
}
