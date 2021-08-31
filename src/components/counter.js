import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

import '../index.css';

const Counter = ({counter, inc, dec, rst, rnd}) => {
    return (
        <div class="jumbotron">
        <h1 id="counter">{counter}</h1>
        <div className="btns">
          <button onClick={inc} id='inc' class="btn btn-primary">
            INC
          </button>
          <button onClick={dec} id='dec' className="btn btn-primary">
            DEC
          </button>
          <button onClick={rst} id='rst' className="btn btn-primary">
            RST
          </button>
          <button onClick={rnd} id='rnd' className="btn btn-primary">
            RND
          </button>
        </div>
        </div>
    );
}
const mapStateToProps = (state) => {
  return {
    counter: state
  }
}
export default connect(mapStateToProps, actions)(Counter);