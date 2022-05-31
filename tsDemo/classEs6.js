class Points {
  constructor(){}
  gerName(){}
  toValue(){}
}
// 等同
// Point.prototype = {
//   constructor() {},
//   gerName() {},
//   toValue() {},
// };
// 由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign()方法可以很方便地一次向类添加多个方法
Object.assign(Points.prototype, { toName(){} })
// prototype.constructor指向本身
console.log(Points.prototype.constructor === Points);
// toValue()方法是Point类内部定义的方法，它是不可枚举的。这一点与 ES5 的行为不一致。

console.log(Object.keys(Points.prototype), Object.getOwnPropertyNames(Points.prototype));
class Person22{
  constructor(name){
    // this.name = name
    // 不return默认返回this
    // return Object.create(null);
    return {
      name: name,
      a: '123'
    }
  }
   age = 12
}

const persondd = new Person22('张三')

console.log(persondd instanceof Person22, persondd.a);

// 与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
class Dots{
  constructor(a, b){
    this.a = a
    this.b = b
  }
  printA() {
    console.log(this.a);
  }
  set bbb(value) {
    this._bbb = value 
    console.log('bbb', value);
  }
  get bbb(){
    return this._bbb
  }
  
}
const dot1 = new Dots( 1, 2)

console.log(dot1.a, dot1.hasOwnProperty('a'), dot1.hasOwnProperty('printA'), dot1.__proto__.hasOwnProperty('printA') );
dot1.bbb = 123
console.log( dot1.bbb);
// 与函数一样，类也可以使用表达式的形式定义

const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
}
// 这个类的名字是Me，但是Me只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用MyClass引用
let inst = new MyClass();
inst.getClassName() // Me
console.log(inst.getClassName());
// Me.name 

// 采用 Class 表达式，可以写出立即执行的 Class。
let person33 = new class{
  constructor(name) {
    this.name = name 
  }
  getName(){
    console.log(this.name);
  }
}('wangwu')
console.log(person33.name);

// 修改可迭代对象
class Foo {
  constructor(...args) {
    this.args = args;
  }
  * [Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg;
    }
  }
}

for (let x of new Foo('hello', 'world')) {
  console.log(x);
}

class Logger {
  constructor(){
 console.log('this-constructor', this);
    // 绑定this解决可能导致的指向为undefined的情况
    this.printName = this.printName.bind(this)
  }
  printName(name = 'there') {
    console.log('this', this);
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
logger.printName()
console.log('this', this);
// 调用时printName中的this指向的是当前的作用域，里面没有print方法
printName()

// static 静态方法 静态方法可以和非静态方法重名，静态方法不能在实例上使用可以被继承
class Foo12 {
  static classMethod() {
    return 'hello';
  }
  static abc() {

  }
  classMethod() {
    return 'world';
  }
}

class Bar12 extends Foo12 {
}
const foo1212 = new Foo12()
// 实例无法获取静态方法
// foo1212.abc()
const bar12123 = new Bar12()
console.log(Bar12.classMethod(), foo1212.classMethod(), bar12123.classMethod());
// 子类的实例同样获取不到
// bar12123.abc()
// 自由变量内部定义方式
let getStaticData
class Foo111 {
  static abc = '这是静态的abc'
  static ddd = '这是静态的ddd'
  // 静态块
  static {
    getStaticData = () => {
      return this.abc + this.ddd
    }

  }
  // 可以直接顶层定义
  _abc = 1
  constructor() {
    // this._abc = 1
  }
  addAbc() {
    this._abc++
  }
  get abc() {
    return this._abc
  }
  // 静态属性使用
  getStaticAbc() {
    return Foo111.ddd
  }
  #aaa =123
}
const foo1112 = new Foo111()
console.log(foo1112.abc);
foo1112.addAbc()
// 私有属性不可调用
// foo1112.#aaa
console.log(foo1112.abc, Foo111._abc, Foo111.abc, getStaticData(), foo1112.getStaticAbc());
// 子类从父类继承的私有属性，也可以使用in运算符来判断
class A {
  #foo = 0;
  static test(obj) {
    console.log(#foo in obj);
  }
}

class SubA extends A {};

A.test(new SubA()) // true
// 借助静态块获取私有属性
let getX;
class C {
  #x = 1;
  static {
    getX = obj => obj.#x;
  }
}

console.log(getX(new C())); // 1
const ad12 = {
  a:1,
  b:2
}
// 创建对象链接原型链
Object.create(ad12)

// ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的
function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}

// 另一种写法
function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}

var person = new Person('张三'); // 正确
// var notAPerson = Person.call(person, '张三');  // 报错

let abcaaad = { 
  a: 1
}
const ws = new WeakSet()
ws.add(abcaaad)
// WeakSet 没有size属性，没有办法遍历它的成员
console.log(ws, ws.size);
// WeakSet 中引用类型会被自动释放
abcaaad = null

// WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。

// WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
const wm = new WeakMap();
let key = {};
let obj = {foo: 1};

wm.set(key, obj);
obj = null;
// Object {foo: 1}
console.log('wm.get(key)', wm.get(key));
key = null
console.log('wm.get(key)', wm.get(key));

// Iterator（遍历器）的概念 § ⇧
// JavaScript 原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了Map和Set。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是Map，Map的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。

// 遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

// Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费

// 无限运行的遍历器对象的例子
var it = idMaker();

it.next().value // 0
it.next().value // 1
it.next().value // 2
// ...

function idMaker() {
  var index = 0;

  return {
    next: function() {
      return {value: index++, done: false};
    }
  };
}
// 如果使用 TypeScript 的写法，遍历器接口（Iterable）、指针对象（Iterator）和next方法返回值的规格可以描述如下。
// interface Iterable {
//   [Symbol.iterator]() : Iterator,
// }

// interface Iterator {
//   next(value?: any) : IterationResult,
// }

// interface IterationResult {
//   value: any,
//   done: boolean,
// }
// ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。至于属性名Symbol.iterator，它是一个表达式，返回Symbol对象的iterator属性，这是一个预定义好的、类型为 Symbol 的特殊值

// 原生具备 Iterator 接口的数据结构如下。

// Array
// Map
// Set
// String
// TypedArray
// 函数的 arguments 对象
// NodeList 对象

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

// iter.next() // { value: 'a', done: false }
// iter.next() // { value: 'b', done: false }
// iter.next() // { value: 'c', done: false }
// iter.next() // { value: undefined, done: true }
console.log(iter.next(), iter.next(), iter.next(), iter.next(), iter.next());
// 类部署 Iterator 接口的写法
class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }

  [Symbol.iterator]() { return this; }

  next() {
    var value = this.value;
    if (value < this.stop) {
      this.value++;
      return {done: false, value: value};
    }
    return {done: true, value: undefined};
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop);
}

for (var value of range(0, 3)) {
  console.log(value); // 0, 1, 2
}
// 通过遍历器实现“链表”结构的例子， 原型链写法
function Obj(value) {
  this.value = value;
  this.next = null;
}
// iterator定义函数
Obj.prototype[Symbol.iterator] = function() {
  var iterator = { next: next };

  var current = this;
  console.log('current', current)
  // next 函数
  function next() {
    if (current) {
      var value = current.value; 
      // 切换下个对象
      current = current.next;
      console.log('current-1', current);
      return { done: false, value: value };
    }
    return { done: true };
  }
  return iterator;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for (var i of two){
  console.log(i); // 1, 2, 3
}

// 对象添加 Iterator 接口的例子

let objIterator = {
  data: [ 'hello', 'world' ],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          };
        }
        return { value: undefined, done: true };
      }
    };
  }
};
for(let i of objIterator){
  console.log(i)
}

// 对于类似数组的对象（存在数值键名和length属性），部署 Iterator 接口，有一个简便方法，就是Symbol.iterator方法直接引用数组的 Iterator 接口。
// NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
// // 或者
// NodeList.prototype[Symbol.iterator] = [][Symbol.iterator];

// [...document.querySelectorAll('div')] // 可以执行了

let iterable = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
  console.log(item); // 'a', 'b', 'c'
}

let objIteratorTest = {
  a:1

}
objIteratorTest[Symbol.iterator] = () => {
  let index = 0
  return {
    next() {
      if(index < 3) {
        return { value: index++, done: false}
      } else {
        return { value: undefined, done: true}
      }
    }
  }

}
console.log('[...objIteratorTest]', [...objIteratorTest]);

// （1）解构赋值

// 对数组和 Set 结构进行解构赋值时，会默认调用Symbol.iterator方法。

// （2）扩展运算符

// 扩展运算符（...）也会调用默认的 Iterator 接口。
// （3）yield*

// yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。

// （4）其他场合

// 由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。下面是一些例子。

// for...of
// Array.from()
// Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
// Promise.all()
// Promise.race()

// yield 关键字
var f = function *(){
  // var x = 1;
  // yield(x+1+1);
  //  console.log('y', )
  // var z = yield(x + 'aa-');
  //  console.log('z', z)
  //  var d = yield(z)
  // // return z;
  // return d
  let x = yield 1
  // next中的参数作为上一个yield的返回值
  let y = yield 2 + x
  let c = yield 3
  let d = yield c + 22
  return d + '结束'
}
const fGeno = f() 
console.log(fGeno.next()) 
console.log(fGeno.next(3))
console.log(fGeno.next('aaaaa'))
console.log(fGeno.next('1111'))
console.log(fGeno.next('222'))

//1、 yield* 是一个表达式，不是语句，所以它会有自己的值
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}
const g4F = g4()
console.log(g4F.next())
console.log(g4F.next())
console.log(g4F.next())
console.log(g4F.next())

var result;

function* g5() {
  result = yield* g4();
}

const g5F = g5();
console.log(g5F.next())
console.log(g5F.next())
console.log(g5F.next())
//  { value: undefined, done: true }, 此时 g4() 返回了 { value: "foo", done: true }
console.log(g5F.next())
console.log(result);          // "foo"

// 2、yield* 还可以 yield 其它任意的可迭代对象，比如说数组、字符串、arguments 对象等等
function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* arguments;
}

var g3F = g3(5, 6);
console.log(g3F.next())
console.log(g3F.next())
console.log(g3F.next())
console.log(g3F.next())
console.log(g3F.next())
console.log(g3F.next())
console.log(g3F.next())

// Symbol.iterator()方法的最简单实现，使用 Generator 函数
let myIterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};
[...myIterable] // [1, 2, 3]

// 或者采用下面的简洁写法

let objjj = {
  * [Symbol.iterator]() {
    yield 'hello';
    yield 'world';
  }
};

for (let x of objjj) {
  console.log(x);
}
// "hello"
// "world"

const forInObj = {
  a: 1,
  b: 2
}
const forInArr = [ 1, 2]
for(item in forInObj) {
  console.log('item', item);
}
for(item in forInArr) {
  console.log('item-1', item);
}
// for(item of forInObj) {
//   console.log('item', item);
// }

// 对于字符串来说，for...of循环还有一个特点，就是会正确识别 32 位 UTF-16 字符。
for (let x of 'a\uD83D\uDC0A') {
  console.log(x);
}
// 'a'
// '\uD83D\uDC0A'
// 并不是所有类似数组的对象都具有 Iterator 接口，一个简便的解决方法，就是使用Array.from方法将其转为数组。
let arrayLike = { length: 2, 0: 'a', 1: 'b' };

// 报错
// for (let x of arrayLike) {
//   console.log(x);
// }

// 正确
for (let x of Array.from(arrayLike)) {
  console.log(x);
}
// 数组提供内置的forEach方法,无法中途跳出forEach循环，break命令或return命令都不能奏效
// for...of循环相比上面几种做法，有一些显著的优点。
