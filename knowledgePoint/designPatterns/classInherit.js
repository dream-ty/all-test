// 类式继承
const Person = function(name){
  this.name = name
}

function Author(name, book) {
  Person.call(this,name)
  this.book = book
}
Person.prototype.getName = function () {
  return this.name
}
const zhangsan = new Author('zhangsan', 'webBook')
// // 增加原型方法
// Author.prototype.getBook = function() {
//   return this.book
// }
const wangwu  = new Author('wangwu', 'webBook3')
// 超类未显示继承
console.log('zhangsan', zhangsan, zhangsan instanceof Author, zhangsan instanceof Person, zhangsan.name, Author.prototype, Author.prototype.constructor);

// 关联上原型链
// Author.prototype = new Person()
// 关联原型链，不生成实例
const PersonF = function() {
}
PersonF.prototype = Person.prototype
Author.prototype = new PersonF()

const lisi = new Author('lisi', 'webBook2')
//超类关联上了，但是构造函数被设置成超类的构造函数了
console.log('lisi', lisi instanceof Author, lisi instanceof Person, lisi.name, Author.prototype, Author.prototype.constructor);

// 还原构造函数
Author.prototype.constructor = Author

// 增加原型方法
Author.prototype.getBook = function() {
  return this.book
}
// 张三getName报错，原因是zhangsan new创建时只是借用了Person的方法，原型链对应的是Object，并没有关联到Person原型链，所以无法使用Person 原型链上的方法, getBook报错是后面修改了原型链重新定义的，两次原型链的指向不是同一个对象
// console.log(zhangsan.getBook(),  zhangsan.getName());
console.log(lisi.getBook(), lisi.getName(), zhangsan.__proto__, lisi.__proto__)

// 继承类函数
function extendClass (subClass, superClass) {
  // 执行后subClass.prototype指向superClass的实例，并且实例化时传参为undefined
  subClass.prototype = new superClass()
  subClass.prototype.constructor = subClass
}
// 优化，避免超类创建新的实例，有时超类会比较大，且有副作用
// function extendClass (subClass, superClass) {
//   // 创建了个中间函数F，连接原型链，用F创建了实例
//   const F = function(){}
//   F.prototype = superClass.prototype
//   subClass.prototype = new F()
//   subClass.prototype.constructor = subClass
// }

// 避免直接被

function Animal (name) {
  this.name = name
}
function Dog (name, leg) {
  // 固定了名称
  Animal.call(this, name)
  this.leg = leg
}
extendClass(Dog, Animal)
const jinmao = new Dog('jinmao', 4)
console.log('jinmao', jinmao, jinmao instanceof Dog, jinmao instanceof Animal);

// // 继承类的方法不够灵活，需要定义时就固定死超类的名称
// // 继承时加入，添加辅助属性
// function extendClass (subClass, superClass) {
//   // 创建了个中间函数F，连接原型链，用F创建了实例
//   const F = function(){}
//   F.prototype = superClass.prototype
//   subClass.prototype = new F()
//   subClass.prototype.constructor = subClass
//   //
//   subClass.superClass = superClass.prototype
//   // 超类的构造函数是对象的构造函数，指向到超类构造函数自身
//   if(superClass.prototype.constructor == Object.prototype.constructor){
//     superClass.prototype.constructor = superClass
//   }

// }
// // 创建类时，使用这个辅助属性
// function Tiger(name, eye) {
//   // 调用超类的构造函数
//   Tiger.superClass.constructor.call(this, name)
//   this.eye = eye
// }
// // 继承
// extendClass(Tiger, Animal)

// // 包裹使用超类中的方法
// Animal.prototype.getName = function() {
//   return this.name
// }
// const dawang = new Tiger('dawang', 2)
// console.log(dawang.getName());

// Tiger.prototype.getName = function() {
//   const name = Tiger.superClass.getName.call(this)
//   return name + '-getName'
// }
// console.log(dawang.getName());

// 原型式继承

// 克隆函数
function clone(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

const PersonObj = {
  left: 4,
  head: 1
}
PersonObj.getHead = function() {
  return this.head
}

const personObj5 = clone(PersonObj)
// const personObj5 = new PersonObj1()
console.log('personObj5', personObj5, personObj5.left, personObj5.getHead());

// 掺元类
/* Augment function. */

function augment(receivingClass, givingClass) {
  for(methodName in givingClass.prototype) { 
    if(!receivingClass.prototype[methodName]) {
      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
    }
  }
}

/* Augment function, improved. */

function augment(receivingClass, givingClass) {
  if(arguments[2]) { // Only give certain methods.
    for(var i = 2, len = arguments.length; i < len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  } 
  else { // Give all methods.
    for(methodName in givingClass.prototype) { 
      if(!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
}

/* Mixin class. */

var Mixin = function() {};
Mixin.prototype = {
  serialize: function() {
    var output = [];
    for(key in this) {
      output.push(key + ': ' + this[key]);
    }
    return output.join(', ');
  }
};

augment(Author, Mixin);

var author = new Author('Ross Harmes', ['JavaScript Design Patterns']);
var serializedString = author.serialize();