import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';

export default {
  input: './src/index.js', // 入口
  output:{
    file: 'dist/umd/vue.js', // 出口路径
    name: 'Vue', // 指定打包后全局变量名字
    format: 'umd', // 模块规范
    sourcemap: true, // 开启源码调试
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // 忽略该文件夹
    }),
    process.env.ENV === 'development' ? serve({
      open: true,
      openPage: '/public/index.html', // 默认打开路径
      port: 3000,
      contentBase: ''
    }) : null
  ]
}