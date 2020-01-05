import React from 'react';
import ReactDom from 'react-dom';
import BaseRouter from './base-router';
import {AppContainer} from 'react-hot-loader';

// redux相关 ↓
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './app/reducers/index';
import {Provider} from 'react-redux';

const store = createStore(reducers, applyMiddleware(thunk));
// redux相关 ↑

// 热加载相关 ↓
const render = (App) => {

    // 渲染组件到根节点
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
// 热加载相关 ↑
