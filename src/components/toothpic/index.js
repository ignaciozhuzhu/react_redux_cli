/**
 * Created by zs on 2017/9/21.
 */
import React from 'react';
import { Button, Input, Alert } from 'antd';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as index_act from "../../actions/index";
import { mapstate } from "../../reducers/shuju"
import Head from '../public/head'
import { Link } from 'react-router-dom';
import './teeth.scss'
var conf = require('../../../config/index');

class ToothPic extends React.Component {
  constructor(arg) {
    super(arg);

  }
  componentWillMount = () => {}

  single = (num) => {
    this.props.act_teeth_turn(num);
  }
  batch = (area) => {
    this.props.act_teeth_turn(area);
  }
  ok = () => {
    this.props.act_teeth_turn();
  }
  cancel = (area) => {
    this.props.act_teeth_turn(area);
  }

  render() {
    var arr = this.props.zs_teeth_list
    let list = arr.map((data, index) => (
      <div key={index} className="list_teeth" onClick={this.single.bind(this,data.id)}>
      {data.status? 
        <div className="blue">
          {data.id}
        </div>:
        <div>
          {data.id}
        </div>
      }
      </div>))
    return (
      <div className="zhuye">
        <Head red_head_tit='牙位图' />
        <div>
        </div>
        <div>
        {list}
        </div>
        <Button onClick={this.batch.bind(this,'LT')}>左上</Button>
        <Button onClick={this.batch.bind(this,'RT')}>右上</Button>
        <Button onClick={this.batch.bind(this,'LB')}>左下</Button>
        <Button onClick={this.batch.bind(this,'RB')}>右下</Button>
      </div>
    )
  }
}

function bindact(dispatch) {
  return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(ToothPic);