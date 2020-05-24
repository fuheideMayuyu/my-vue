import {initState} from './state'
import {compileToFunction} from './compiler/index.js'



// 初始化流程
export function initMixin(Vue){
  Vue.prototype._init = function(options){
    // 数据劫持
    const vm = this; // vue中使用this.options指代用户传递的属性
    vm.$options = options
    // 初始化状态
    initState(vm); // 分割代码

    // 如果用户传入了el属性， 需要将页面渲染出来
    if(vm.$options.el){
      vm.$mount(vm.$options.el)
    }
  }

  Vue.prototype.$mount = function (el) {
    const vm = this
    const options = vm.$options
    el = document.querySelector(el)

    // 默认先查找是否有render方法，没有则编译template, 还没有则采用el中的内容
    if(!options.render){
      //编译模板
      let template = options.template // 取出模板
      if(!template && el){
        template = el.outerHTML

      }
      const render = compileToFunction(template)
      options.render = render
      console.log(template)
    }
  }
}