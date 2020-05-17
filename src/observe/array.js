// 重写数组方法 push shift unshift pop reverse sort splice
let oldArrayMethods = Array.prototype
// value.__proto__ = arrayMethods 原型链查找
// arrayMethods.__proto__ = oldArrayMethods
export const arrayMethods = Object.create(oldArrayMethods);

const methods = [
  'push',
  'shift',
  'unshift',
  'pop',
  'reverse',
  'sort',
  'splice',
]
methods.forEach(method => {
  arrayMethods[method] = function(...args){
    const result = oldArrayMethods[method].apply(this, args) // 调用原生数组方法
    let inserted // 当前用户插入元素
    let ob = this.__ob__
    switch(method){
      case 'push':
      case 'unshift': 
        inserted = args
        break;
      case 'splice':
        inserted = args.slice(2)
      default: 
        break;
    }
    if(inserted){
      ob.observerArray(inserted) // 将新增属性继续观测
    }
    return result
  }
})