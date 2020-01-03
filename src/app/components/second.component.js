import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {
    console.log(state);
    return {
        data: state.homepageReducer.data
    }
}
const mapDispatchToProps = (dispatch, props) => {

    return {

    }
}
@connect(mapStateToProps, mapDispatchToProps)
class Second extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data} = this.props;
        return (
            <div>
                {data}
            </div>
        );
    }
}

export default Second;