import {observe} from './observe/index.js'
export function initState(vm){
  const opts = vm.$options
  console.log(opts)
  // vue得我数据来源 属性 方法 数据 计算属性 watch
  if(opts.props){
    initProps(vm)
  }
  if(opts.methods){
    initMethod(vm)
  }
  if(opts.data){
    initData(vm)
  }
  if(opts.computed){
    initComputed(vm)
  }
  if(opts.watch){
    initWatch(vm)
  }
}

function initProps(){}
function initMethod(){}
function initData(vm){
  // 数据初始化
  let data = vm.$options.data
  // 为了让用户也获取data数据 vm._data
  data = vm._data =  typeof data === 'function'?data.call(vm):data
  // 对象劫持 用户改变数据 得到通知 => 刷新页面
  // MVVM 模式 数据驱动视图变化
  observe(data) // 响应式原理
}
function initComputed(){}
function initWatch(){}















