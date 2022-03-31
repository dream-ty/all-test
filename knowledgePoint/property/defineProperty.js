// ECMAScript中有两种属性：数据属性和访问器属性。

// 2.1 数据属性
// 数据属性包含一个数据值的位置，在这个位置可以读取和写入值。数据属性有4个描述其行为的特性。

// 可配置性 [[Configurable]] : 表示能否通过delete删除属性，能否修改属性特性，能否把数据属性修改为访问器属性。
// 可枚举性[[Enumerable]]：表示能否通过for-in循环返回属性。
// 可写入性[[Writable]]：表示能否修改属性值。
// 属性值[[Value]]：表示属性值。
// 2.2 访问器属性
// 访问器属性不包含数据值，而是包含一对getter和setter函数（这两个函数非必须）。在读取访问器属性时，调用getter函数，在写入访问器属性时，调用setter函数。访问器属性由4个特性：
// 可配置性 [[Configurable]]：表示能否通过delete删除属性，能否修改属性特性，能否把访问器属性修改为数据属性。
// 可枚举性[[Enumerable]]：表示能否通过for-in循环返回属性。
// 读取属性函数[[Get]]：在读取属性时调用的函数。
// 写入属性函数[[Set]]：在写入属性时调用的函数。

// 3. 属性描述符概述
// 对于数据属性和访问器属性，其特性值是无法直接访问的。要对这些特性值进行修改，可以使用ECMAScript5提供的Object.defineProperty()方法。该方法接受三个参数：属性所在对象，属性名字和一个描述符对象。

// 属性所在对象，属性名字很好理解。那么属性描述符对象呢？它其实是和属性的特性一一对应，只不过没有了两对中括号，我们可以通过ECMAScript5提供的一些方法来修改描述符对象。另外，可以用Object.getOwnPropertyDescriptor()方法，取得指定对象指定属性的描述符。这个方法接收两个参数：属性所在对象，属性名字。更多的方法我们会在文章后面详细介绍。

let obj = {}

Object.defineProperty(obj, 'a', { value: 2, writable: true, enumerable: true, configurable: true})
obj.b = 3
// console.log(Object.getOwnPropertyDescriptor(obj, 'a'))
// console.log(Object.getOwnPropertyDescriptors(obj))
// 使用Object.defineProperty修改属性
Object.defineProperty(obj, 'a', { value: 21, writable: true, enumerable: true, configurable: true})
// 冻结b
Object.defineProperty(obj, 'b', { value: 21, writable: false, enumerable: true, configurable: true})
obj.b = 3
// console.log(Object.getOwnPropertyDescriptors(obj))
Object.defineProperty(obj, 'b', { value: 211, writable: false, enumerable: true, configurable: true})
// console.log(Object.getOwnPropertyDescriptors(obj), obj.b)

// configurable值为true时，可以删除属性值；configurable值为为false时，不能删除属性值；
// configurable值为true时，可以修改任意描述符属性值；configurable值为false时，修改规则遵循3，4，5。
// configurable值为为false时，如果writable值为true，可以使用Object.defineProperty()方法改变value值；configurable值为为false时，如果writable值为false，不能使用Object.defineProperty()方法改变value值；
// configurable值为false时，如果writable值为true，可以修改其为false；configurable值为false时，如果writable值为false，不能修改其为true；
// configurable值为false时，除3，4两种情况，不可修改描述符属性值。

Object.defineProperty(obj, 'c', { value: 123, writable: true, enumerable: true, configurable: false})

// console.log(Object.getOwnPropertyDescriptors(obj));
delete obj.c
// console.log(obj.c, Object.getOwnPropertyDescriptors(obj));
obj.c = 12334566
// Object.defineProperty(obj, 'c', { value: 123, writable: true, enumerable: true, configurable: true})
// console.log(obj.c, Object.getOwnPropertyDescriptors(obj));
Object.defineProperty(obj, 'c', { value: 123, writable: false, enumerable: true, configurable: false})
// Object.defineProperty(obj, 'c', { value: 2222, writable: false, enumerable: true, configurable: false})
// console.log(obj.c, Object.getOwnPropertyDescriptors(obj));

// 4.2.1 get方法
// 读取属性值时所调用的方法，会触发隐藏的getter操作。设置了get或set方法的属性，会自动变成访问器属性，不再从value读取属性值。用Object.getOwnPropertyDescriptor方法也不再返回value和writable。
Object.defineProperty(obj, 'b', {  
  set: function(val) { 
    this.a = val
  // console.log(11111, this, val) 
}, get: function() { return this.a }})
// console.log(obj.b, Object.getOwnPropertyDescriptor(obj, 'b'));
obj.b = 123456
// console.log(obj.b, obj.b);

// 直接对象字面量使用setter  getter
const obj2 = {
  _a: 1,
  _abc: 1,
  set a(val) { this._a = val},
  set abc(val) { this._abc = val},
  get a() { return this._a}
}

obj2.a = 123456
obj2.abc = 456
// console.log(obj2.a, obj2._a, obj2.abc, obj2._abc, Object.getOwnPropertyDescriptors(obj2), obj2);

// 用Object.defineProperties()方法同时定义的多个属性，与Object.defineProperty()方法定义的表现相同
Object.defineProperties(obj, {
  'd': {
    value: true,
    writable: true
  },
  'e': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});

// Object.create()方法
// Object.create()方法其实是在一个空对象的原形上添加属性并返回该对象。
var obj123 = Object.create({a:1});
// 返回一个空对象
//  console.log(obj); // {}
// console.log(Object.getOwnPropertyDescriptor(obj, 'a'));  // undefined
// 返回的对象，其原形上面该属性为数据属性，writable，enumerable和configurable默认都是true
// console.log(Object.getOwnPropertyDescriptor(obj.__proto__, 'a')); // {value: 1, writable: true, enumerable: true, configurable: true}

// 设置单个属性可以使用Object.defineProperty()方法，要注意的是，对于同一个属性，不可以同时在描述符中指定属于数据描述符的value，writable和属于访问器描述符的get，set，否则会报错。

// 禁止添加新属性可以使用Object.preventExtensions()方法，该方法接收一个目标对象传入，使用后该对象禁止添加新属性,   也不能使用Object.defineProperty方法进行扩展，会报错
var obj3 = {
  a:1
};
Object.preventExtensions(obj3);
obj3.b = 2;
obj3.b; // undefined
console.log(Object.getOwnPropertyDescriptors(obj3));

// 使用Object.seal() 方法创建一个“密封”的对象，这个方法实际上会在一个现有对象上调用 Object.preventExtensions()方法 并把所有现有属性标记为configurable:false。密封之后不仅不能添加新属性，也不能重新配置或者删除任何现有属性(但是可以修改属性的值)

// Object.freeze(..) 会创建一个冻结对象，这个方法实际上会在一个现有对象上调用 Object.seal(..) 并把所有“数据访问”属性标记为 writable:false，这样就无法修改它们的值。

