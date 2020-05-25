// compose: 组合函数, compose 函数做的事就是把 var a = fn1(fn2(fn3(fn4(x)))) 这种嵌套的调用方式改成 var a = compose(fn1,fn2,fn3,fn4)(x) 的方式调用
// applyMiddleware: 包裹中间件
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

// 中间件的数组
const middlewares = [thunk]

// 开发环境, 添加日志中间件
if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV === 'quickapp') {
  middlewares.push(require('redux-logger').createlogger())
}

// 组合函数
const enhancer = composeEnhancers(applyMiddleware(...middlewares))

const store = createStore(reducer, enhancer) 

export default store 