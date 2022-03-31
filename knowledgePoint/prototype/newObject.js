
// function Person (name, age) {
//   this.name = name
//   this.age = age
//   // return 的区别
//   // return { name: name }
  
// }
// // 执行Person('lisi', 20)，对全局变量的改变
// let name = '111'

// const zhangsan = new Person('zhangsan', 17)
// const lisi = Person('lisi', 20)
// console.log('zhangsan', zhangsan, lisi, name, age, zhangsan.abc);
// console.log(name);

// // 模拟 new操作符
// function newObj() {
//   // 创建对象
//   const obj = {}
//   // 取出构造函数
//   const objConstruction = [].shift.call(arguments)
//   // 连接原型链
//   obj.__proto__ = objConstruction.prototype
//   // 返回新对象，构造函数有返回值的返回返回值
//   const res = objConstruction.apply(obj, arguments)
//   return res ? res : obj
// }
// const son1 = newObj(Person, 'wangwu', 37)
// Person.prototype.abc = 123

// console.log(son1.abc);

// js 创建对象的几种方式
// 一、直接创建Object实例
// let a = {}
// a.b = 1

// let c = {
//   b: 1
// }
// 这种方式的缺点显而易见，每次创建一个对象就需要手动设置它的每一个属性，造成大量代码重复，JS可以使用工厂模式的变体解决这个问题

// 二、工厂模式
// function createPerson(name, age , sex){
//   const data = new Object()
//   data.name = name 
//   data.age = age 
//   data.sex = sex 
//   return data
// }
// let person1 = createPerson('zhangsan', '18', 'women')
// 这种模式解决了创建多个相似对象的问题，但是却不知道当前创建的对象是什么类型，即是Person还是Robot不能判断出来

// 三、 构造函数模式
// function Person(name, age , sex) {
//   this.name = name
//   this.age = age
//   this.sex = sex
//   this.sayName = function() {
//     return this.name
//   }
// }
// let person1 = new Person('zhangsan', '18', 'women')
// let person2 = new Person('zhangsan', '18', 'women')
// console.log(person1, person1 instanceof Person);
// 构造函数名开头大写借鉴了其他面向对象语言，是为了区别普通函数。任何一个函数不通过new操作符调用，就是一个普通函数
// 构造函数仍然存在缺点，就是其中的每个方法例如sayName()，在每次实例化时都会自动重新创建一遍，产生不同的作用域链，因此即使是同名函数也是不相等的
// console.log(person1.sayName == person2.sayName, person1.sayName() === person2.sayName());

// 四、原型模式
// 使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。
// function Person(name) {
//   this.name = name
// }
// Person.prototype.sayName = function () {
//   return this.name
// }
// let person1 = new Person('zhangsan', '18', 'women')
// let person2 = new Person('zhangsan', '18', 'women')
// console.log(person1.sayName == person2.sayName, person1.sayName() === person2.sayName(), person2 instanceof Person, Person.prototype.constructor === Person);
// 重写原型链, 构造函数丢失
// Person.prototype = {
//   sayName: function() {}
// }
// let person3 = new Person('zhangsan', '18', 'women')
// console.log(person3 instanceof Person, Person.prototype.constructor === Person);
// 但这里使用的语法本质上完全重写了默认的prototype对象（原型对象），因此本来会自动获得的constructor属性变成了新对象的constructor属性（指向Object构造函数），不再指向Person函数，此时instanceof能返回正确的结果，但是constructor已经无法确定对象类型了
// 如果constructor值真的很重要，可以通过下面这样特意将它设置回适当的值
// Person.prototype = {
//   constructor: Person,
//   sayName: function() {}
// }
// let person4 = new Person('zhangsan', '18', 'women')
// console.log(person4 instanceof Person, Person.prototype.constructor === Person);
// 原型模式也有缺点，当其中包含引用类型值属性时会出现问题：
// Person.prototype.birthday = [1999, 02, 02]
// person1.birthday.push(123)
// console.log(person1.birthday, person2.birthday);

// 五、组合模式
// 构造函数和原型结合
// function Person(name) {
//   this.name = name
//   this.birthday = [1999, 02, 02]
// }
// Person.prototype.sayName = function () {
//   return this.name
// }
// let person1 = new Person('zhangsan', '18', 'women')
// let person2 = new Person('zhangsan', '18', 'women')
// person1.birthday.push(123)
// console.log(person1.birthday, person2.birthday);
// 六、动态原型模式
function Person(name, age) {
  this.name = name
  this.age = age
  if(typeof this.say !== 'function') {
    Person.prototype.say = function(){
      console.log(this.name, this.age);
    }
  }
}
let person1 = new Person('zhangsan', '18', 'women')
let person2 = new Person('lisi', '20', 'women')
person1.say()
Person.prototype.say = function(){
  console.log(this.name);
}
person2.say()
person1.say()