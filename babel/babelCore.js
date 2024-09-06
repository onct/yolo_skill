// 测试@babel/core
const babelCore = require('@babel/core');
const code = `let fn = (nums) => nums + 2`;
const fs = require('fs');
const path = require('path')
// const parser  = require('@babel/parser');
// const code1 = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');

const options = {
  //是否生成解析的代码
  code: true,
  //是否生成抽象语法树
  ast: true,
  //是否生成sourceMap
  sourceMaps: true,
  sourceType: 'unambiguous',
  plugins: [],
  presets: [],
};

babelCore.transform(code, options, function (err, result) {
  console.log(result);
  console.log('==================');
  console.log(result.code);
  console.log('==================');
  console.log(result.map);
  console.log('==================');
  console.log(result.ast);
  console.log('==================');
  console.log(result.ast?.program?.body);
});