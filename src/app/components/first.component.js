import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./first.component.css"

const mapStateToProps = (state, props) => {
    return {

    }
}
const mapDispatchToProps = (dispatch, props) => {

    return {
        clk: () => {
            dispatch({type: 'todo', data: '123'});
        }
    }
}
@connect(mapStateToProps, mapDispatchToProps)
class First extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {clk} = this.props;
        return (
            <div className="first" onClick={clk}>
                点击
            </div>
        );
    }
}

export default First;