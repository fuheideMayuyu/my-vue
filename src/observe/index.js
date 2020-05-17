// object.definedProperty重新定义es5
import {isObject, def} from '../utils/index.js'
import {arrayMethods} from './array.js'

class Observer{
  constructor(value){
    // 给每个监控的对象增加一个__ob__属性
    def(value, '__ob__', this)
    if(Array.isArray(value)){
      // 如果是数组的话，并不会对索引进行观测，否则会有性能问题
      // 重写push pop shift unshift 数组方法
      value.__proto__ = arrayMethods
      // 如果数组中放的是对象再检测
      this.observerArray(value)
    } else {
      this.walk(value)
    }
  }
  observerArray(value){
    for(let i = 0; i < value.length; i++){
      observe(value[i])
    }
  }
  walk(data){
    let keys = Object.keys(data);
    keys.forEach(key => {
      defineReactive(data, key, data[key]) // 定义响应式数据
    })
  }
}

// 监听数据变化，动态添加get set方法
function defineReactive(data, key, value){
  observe(value) // 递归实现深度检测
  Object.defineProperty(data, key, {
    get(){
      return value
    },
    set(newValue){
      if(newValue === value) return
      observe(value) // 继续劫持用户设置的值， 该值可能是个对象
      value = newValue
    }
  })
}

export function observe(data){
  let isObj = isObject(data)
  if(!isObj) {
    return
  }
  return new Observer(data) // 如果是对象， 则观测数据
}