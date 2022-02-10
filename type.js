// console.log(12123)
// console.log([].constructor);
// console.log({}.constructor);
// const a = 1
// console.log(a.constructor);
// console.log(({a:1}).toString());
// console.log(Object.prototype.toString.call([]));
// console.log(({a:1}).__proto__ === Object.prototype);

function Person (name, age) {
  this.name = name
  this.age = age
  // return { name: name }
}
let name = '111'
const zhangsan = new Person('zhangsan', 17)
const lisi = Person('lisi', 20)
console.log('zhangsan', zhangsan, lisi, name, age, zhangsan.abc);
console.log(name);

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

// console.log(son1.abc);

// function toThousands (num, pointLength) {
//   if (!num) return 0
//   const _value = num.toString()
//   const tempArr = _value.split('.')
//   const startValue = tempArr[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
//   const endValue = pointLength ? (num.toFixed(pointLength)).split('.')[1] : tempArr[1]
//   const noDecimalPointValue = tempArr.length > 1 ? startValue + '.' + endValue : startValue

//   return pointLength ? startValue + '.' + endValue : noDecimalPointValue
// }

// console.log(toThousands(113212,2))