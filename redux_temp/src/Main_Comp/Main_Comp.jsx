import React, { Component } from 'react';
import { connect } from 'react-redux';
import { plus, minus, reset } from '../redux/actions/counterAction.js';
import './Counter.css';

class Counter extends Component {

    numberUp = () => {
        this.props.plus(1);
    }

    render() {
        console.log(this.props);
        // let { count } = this.state;
        return (
            <div className='container'>
                <p className='count'> {this.props.count}</p>
                <div className='buttons'>
                    <button className='btn' onClick={() => this.props.minus(1)}>-</button>
                    <button className='btn' onClick={this.props.reset}>reset</button>
                    <button className='btn' onClick={this.numberUp} >+</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        plus: function (number) {
            dispatch(plus(number));
        },
        minus: function (number) {
            dispatch(minus(number))
        },
        reset: function () {
            dispatch(reset)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);