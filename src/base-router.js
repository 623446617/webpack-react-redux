/**
 * @作者: mxw
 * @日期: 2020/1/3
 * @模块:
 **/
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import home from './app/home-page.component/home-page.component'

class BaseRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default BaseRouter;


