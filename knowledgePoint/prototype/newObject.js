
function Person (name, age) {
  this.name = name
  this.age = age
  // return 的区别
  // return { name: name }
  
}
// 执行Person('lisi', 20)，对全局变量的改变
let name = '111'

const zhangsan = new Person('zhangsan', 17)
const lisi = Person('lisi', 20)
console.log('zhangsan', zhangsan, lisi, name, age, zhangsan.abc);
console.log(name);

// 模拟 new操作符
function newObj() {
  // 创建对象
  const obj = {}
  // 取出构造函数
  const objConstruction = [].shift.call(arguments)
  // 连接原型链
  obj.__proto__ = objConstruction.prototype
  // 返回新对象，构造函数有返回值的返回返回值
  const res = objConstruction.apply(obj, arguments)
  return res ? res : obj
}
const son1 = newObj(Person, 'wangwu', 37)
Person.prototype.abc = 123

console.log(son1.abc);