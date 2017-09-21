/**
 * Created by zengtao on 2017/3/6.
 */
import { combineReducers } from "redux"
import { List, fromJS } from "immutable";

//首页得文字
export function red_index_tit(state = '上面一旦重新填我就变了', action) {
  switch (action.type) {
    case "INDEX_TIT":
      return action.data;
      break;
    default:
      return state
  }
}
//标题
export function red_head_tit(state = 'react_home', action) {
  switch (action.type) {
    default: return state
  }
}
export function red_list(state = [], action) {
  switch (action.type) {
    case 'LIST':
      return action.data;
      break;
    default:
      return state
  }
}

//计数器处理
export function zs_numb(state = 0, action) {
  switch (action.type) {
    case "ADD_NUMB":
      return action.data + 1;
      break;
    case "MINUS_NUMB":
      return action.data - 1;
      break;
    default:
      return state
  }
}

const setToothArr = () => {
  let ToothArr = []
  for (var j = 1; j < 5; j++) {
    if (j % 2 == 1)
      for (var i = 8; i > 0; i--) {
        ToothArr.push({ 'id': j * 10 + i, status: false })
      }
    else if (j % 2 == 0)
      for (var i = 1; i < 9; i++) {
        ToothArr.push({ 'id': j * 10 + i, status: false })
      }
  }
  return ToothArr
}

//牙位图处理
export function zs_teeth_list(state = setToothArr(), action) {
  switch (action.type) {
    case "TURN":
      {
        var newState = JSON.parse(JSON.stringify(state))
        state.map(function(data, index) {
          if (typeof action.data == 'number') {
            if (data.id == action.data) {
              newState[index].status = !newState[index].status
            }
          } else if (typeof action.data == 'string') {
            newState[index].status = false
            if (data.id < 20 && action.data == 'LT') {
              newState[index].status = !newState[index].status
            }
            if (data.id < 30 && data.id > 20 && action.data == 'RT') {
              newState[index].status = !newState[index].status
            }
            if (data.id < 40 && data.id > 30 && action.data == 'LB') {
              newState[index].status = !newState[index].status
            }
            if (data.id < 50 && data.id > 40 && action.data == 'RB') {
              newState[index].status = !newState[index].status
            }
          }
        })
        return newState;
      }
      break;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  red_index_tit,
  red_head_tit,
  red_list,
  zs_numb,
  zs_teeth_list,
})
export default rootReducer