/**
 * Created by zs on 2017/9/20.
 */
import React from 'react';
import { Button, Input, Alert } from 'antd';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as index_act from "../../actions/index";
import { mapstate } from "../../reducers/shuju"
import Head from '../public/head'
import { Link } from 'react-router-dom';
var conf = require('../../../config/index');

class Counter extends React.Component {
  constructor(arg) {
    super(arg);

  }

  componentWillMount = () => {}
  add = (num) => {
    this.props.act_numb_add(num);
  }
  minus = (num) => {
    this.props.act_numb_minus(num);
  }

  render() {
    let num = this.props.zs_numb
    return (
      <div className="zhuye">
        <Head red_head_tit='计数器' />
        <div>
        </div>
        <div>
          <Alert
            message={num}
            type="success" />
        </div>
        <div>
        <Button onClick={this.add.bind(this,num)}>加</Button>
        <Button onClick={this.minus.bind(this,num)}>减</Button>
        </div>
      </div>
    )
  }
}

function bindact(dispatch) {
  return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Counter);