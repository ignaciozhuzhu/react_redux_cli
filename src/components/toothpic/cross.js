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

class Cross extends React.Component {
  constructor(arg) {
    super(arg);

  }
  componentWillMount = () => {}

  getLT(value) {
    return value.id < 20;
  }
  getRT(value) {
    return value.id > 20 && value.id < 30;
  }
  getLB(value) {
    return value.id > 30 && value.id < 40;
  }
  getRB(value) {
    return value.id > 40 && value.id < 50;
  }

  render() {
    var arr = this.props.zs_teeth_list
    let list1 = arr.filter(this.getLT).map((data, index) => (
      <Table key={index} data={data} />
    ))
    let list2 = arr.filter(this.getRT).map((data, index) => (
      <Table key={index} data={data} />
    ))
    let list3 = arr.filter(this.getLB).map((data, index) => (
      <Table key={index} data={data} />
    ))
    let list4 = arr.filter(this.getRB).map((data, index) => (
      <Table key={index} data={data} />
    ))
    return (
      <div >
      {list1}<div className="verticalBar"></div>
       {list2}
       <hr />
       {list3}
       {list4}
      </div>
    )
  }
}

class Table extends React.Component {
  constructor(arg) {
    super(arg);

  }
  componentWillMount = () => {}
  single = (num) => {
    this.props.act_teeth_turn(num);
  }
  render() {
    const { data } = this.props
    return (
      <div className="list_teeth2">
          {data.status? 
            <div>
              {data.id}
            </div>:
            <div className="transparent">
              {data.id}
            </div>
          }
      </div>
    )
  }
}

function bindact(dispatch) {
  return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Cross);