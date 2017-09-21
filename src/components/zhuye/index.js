/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import { Button, Input, Alert, Modal } from 'antd';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as index_act from "../../actions/index";
import { mapstate } from "../../reducers/shuju"
import Head from '../public/head'
import { Link } from 'react-router-dom';

import Counter from '../counter/index'
import ToothPic from '../toothpic/index'

import Cross from '../toothpic/cross'
import '../toothpic/teeth.scss'

var conf = require('../../../config/index');

class Index extends React.Component {
  constructor(arg) {
    super(arg);

  }
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    //console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    //console.log(e);
    this.props.act_teeth_turn('NO');
    this.setState({
      visible: false,
    });
  }

  componentWillMount = () => {}

  gaizi = (e) => {
    this.props.act_index_tit(e.target.value);
  }


  render() {
    return (
      <div className="zhuye">

        <Head {...this.props} />
        <div>
          <Input
            type="text"
            onChange={this.gaizi.bind(this)}
            placeholder="填入试试下面得字会变" />
        </div>
        <div>
          <Alert
            message={this.props.red_index_tit}
            type="success" />
        </div>
        <div>
          <Link to={conf.path + "/tui"}>
            跳转到内页
          </Link>
        </div>


        <Button type="primary" onClick={this.showModal}>打开牙位图</Button>
        <Modal
          title=""
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <ToothPic />
        </Modal>
        <br />
        <Cross />
        
        <br />

        <Counter />
      </div>
    )
  }
}

function bindact(dispatch) {
  return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Index);