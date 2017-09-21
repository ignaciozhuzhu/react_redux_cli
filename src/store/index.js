// 引入createStore创建store，引入applyMiddleware 来使用中间件
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// 引入所有的reducer
import rootReducer from 'reducers';
// 利用redux-logger打印日志
import createLogger from 'redux-logger'
// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'

// 调用日志打印方法 collapsed是让action折叠，看着舒服点
const loggerMiddleware = createLogger({ collapsed: true });
// 创建一个中间件集合
const middleware = [thunk, loggerMiddleware];
const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  ));
export default store;