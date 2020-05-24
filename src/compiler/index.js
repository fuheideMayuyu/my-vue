// ast语法树是用对象来描述原生语法， 虚拟dom是用对象来描述dom节点

const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const startTagOpen = new RegExp(`^<${qnameCapture}`)  // 标签开头正则，匹配标签名
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`) // 匹配标签结尾
const attribute =  /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/  // 匹配属性
const startTagClose = /^\s*(\/?)>/  // 匹配标签结束的 >
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g

console.log(`  aa="123"`.match(attribute))
export function compileToFunction(template){
  console.log('----', template)
  return function render(){

  }
}