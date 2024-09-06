// "babel": "babel babel/index.js -o babel/output.js",
// 解决@babel/preset-env 转换不了filter、find、fill、flat问题，但是会发现打包后require进来，打包体积会变大
// import '@babel/polyfill'

// 测试babel转化
const arrow = () => {
  console.log("测试箭头函数");
};
const p = new Promise((resolve, reject) => {
  resolve("测试Promise");
});
const list = [1, 2, 3, 4].map((item) => item * 2);

// @babel/preset-env 转换不了filter、find、fill、flat等等
const filter = [1, 2, 3, 4].filter(item => item > 2);
const find = [1, 2, 3, 4].find(item => item === 2);
const fill = [1, 2, 3, 4].fill(0, 2, 4);
const flat = [1, 2, [3, 4]].flat();

// 测试async、Generator
async function asyncFunc () {
  await arrow();
}
function *generatorFunc () {
  yield arrow();
}
// 测试一下class语法
class NewClass {
  constructor() {
    this.name = "NewClass";
  }
  getName() {
    console.log(this.name)
  }
}