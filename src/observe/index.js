// object.definedProperty重新定义es5
import {isObject} from '../utils/index.js'

class Observer{
  constructor(value){
    this.walk(value)
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