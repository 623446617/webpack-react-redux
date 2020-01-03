import React from 'react';
import ReactDom from 'react-dom';
import BaseRouter from './base-router';
import { AppContainer } from 'react-hot-loader';

const render = (App) => {
    ReactDom.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('app')
    );
}

render(BaseRouter);

if (module.hot) {
    module.hot.accept('./base-router', () => {
        render(require('./base-router').default)
    })
}
