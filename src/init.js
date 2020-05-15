import {initState} from './state'
// 初始化流程
export function initMixin(Vue){
  Vue.prototype._init = function(options){
    console.log('vue', Vue)
    console.log('options', options)
    // 数据劫持
    const vm = this; // vue中使用this.options指代用户传递的属性
    vm.$options = options
    // 初始化状态
    initState(vm); // 分割代码
  }
}