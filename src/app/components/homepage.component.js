/**
 * @作者: mxw
 * @日期: 2020/1/3
 * @模块:
 **/
import React, {Component} from 'react';
import First from "./first.component";
import Second from "./second.component";
class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.geta();
    }

    geta = () => {
        let a = '1';
        let b = ['1', '3'];
        console.log($('#a'));
    }

    render() {
        return (
            <div id='a' style={{'backgroundColor': 'blue'}}>
                <First />
                <Second/>
            </div>
        );
    }
}
export default HomePage;
