// 基本数据类型
// undefined  null String Number Boolean  Symbol 

// 栈   原始数据类型  undefined null  String Number Boolean Symbol
// 堆   引用数据类型  Object(Array  Function)
// 两种类型的区别是：存储位置不同。
// 原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。

// 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在
// 栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实
// 体。
// 两种类型间的主要区别是它们的存储位置不同，基本数据类型的值直接保存在栈中，而复杂数据类型的值保存在堆中，通过使用在栈中
// 保存对应的指针来获取堆中的值。

// 堆和栈的概念存在于数据结构中和操作系统内存中。
// 在数据结构中，栈中数据的存取方式为先进后出。而堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。完全
// 二叉树是堆的一种实现方式。
// 在操作系统中，内存被分为栈区和堆区。
// 栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
// 堆区内存一般由程序员分配释放，若程序员不释放，程序结束时可能由垃圾回收机制回收。

// 内部属性 [[Class]] 是什么？
// 所有 typeof 返回值为 "object" 的对象（如数组）都包含一个内部属性 [[Class]]（我们可以把它看作一个内部的分类，而非
// 传统的面向对象意义上的类）。这个属性无法直接访问，一般通过 Object.prototype.toString(..) 来查看。例如：
Object.prototype.toString.call( [1,2,3] );
// "[object Array]"
Object.prototype.toString.call( /regex-literal/i );
// "[object RegExp]"
// console.log(typeof [1,2,3], Object.prototype.toString.call( [1,2,3] ));

// 介绍 js 有哪些内置对象？
// 全局的对象（ global objects ）或称标准内置对象，不要和 "全局对象（global object）" 混淆。这里说的全局的对象是说在
// 全局作用域里的对象。全局作用域中的其他对象可以由用户的脚本创建或由宿主程序提供。
// 标准内置对象的分类
// （1）值属性，这些全局属性返回一个简单值，这些值没有自己的属性和方法。
// 例如 Infinity、NaN、undefined、null 字面量
// （2）函数属性，全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。
// 例如 eval()、parseFloat()、parseInt() 等
// （3）基本对象，基本对象是定义或使用其他对象的基础。基本对象包括一般对象、函数对象和错误对象。
// 例如 Object、Function、Boolean、Symbol、Error 等
// （4）数字和日期对象，用来表示数字、日期和执行数学计算的对象。
// 例如 Number、Math、Date
// （5）字符串，用来表示和操作字符串的对象。
// 例如 String、RegExp
// （6）可索引的集合对象，这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。例如 Array
// （7）使用键的集合对象，这些集合对象在存储数据时会使用到键，支持按照插入顺序来迭代元素。
// 例如 Map、Set、WeakMap、WeakSet
// （8）矢量集合，SIMD 矢量集合中的数据会被组织为一个数据序列。
// 例如 SIMD 等
// （9）结构化数据，这些对象用来表示和操作结构化的缓冲区数据，或使用 JSON 编码的数据。
// 例如 JSON 等
// （10）控制抽象对象
// 例如 Promise、Generator 等
// （11）反射
// 例如 Reflect、Proxy
// （12）国际化，为了支持多语言处理而加入 ECMAScript 的对象。
// 例如 Intl、Intl.Collator 等
// （13）WebAssembly
// （14）其他
// 例如 arguments
// js 中的内置对象主要指的是在程序执行前存在全局作用域里的由 js 定义的一些全局值属性、函数和用来实例化其他对象的构造函
// 数对象。一般我们经常用到的如全局变量值 NaN、undefined，全局函数如 parseInt()、parseFloat() 用来实例化对象的构
// 造函数如 Date、Object 等，还有提供数学计算的单体内置对象如 Math 对象。

// undefined 与 undeclared 的区别？
// 已在作用域中声明但还没有赋值的变量，是 undefined 的。相反，还没有在作用域中声明过的变量，是 undeclared 的。
// 对于 undeclared 变量的引用，浏览器会报引用错误，如 ReferenceError: b is not defined 。但是我们可以使用 typ
// eof 的安全防范机制来避免报错，因为对于 undeclared（或者 not defined ）变量，typeof 会返回 "undefined"。
// let ab
// console.log(typeof b, ab, typeof ab);

// null 和 undefined 的区别？
// 首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。
// undefined 代表的含义是未定义，null 代表的含义是空对象。一般变量声明了但还没有定义的时候会返回 undefined，null
// 主要用于赋值给一些可能会返回对象的变量，作为初始化。
// undefined 在 js 中不是一个保留字，这意味着我们可以使用 undefined 来作为一个变量名，这样的做法是非常危险的，它
// 会影响我们对 undefined 值的判断。但是我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。
// 当我们对两种类型使用 typeof 进行判断的时候，Null 类型化会返回 “object”，这是一个历史遗留的问题。当我们使用双等
// 号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。
// console.log(undefined == undefined, undefined === undefined, null == null, null === null, typeof undefined, typeof null, typeof undefined === typeof undefined, typeof null == typeof null, typeof null === typeof null);
// 安全获得undefined
// console.log( void 0);

// JavaScript 原型，原型链？有什么特点？
// 在 js 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性值，这个属性值是一个对
// 象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当我们使用构造函数新建一个对象后，在这个对象的内部
// 将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。一般来说我们
// 是不应该能够获取到这个值的，但是现在浏览器中都实现了 __proto__ 属性来让我们访问这个属性，但是我们最好不要使用这
// 个属性，因为它不是规范中规定的。ES5 中新增了一个 Object.getPrototypeOf() 方法，我们可以通过这个方法来获取对
// 象的原型。
// 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又
// 会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 Object.prototype 所以这就
// 是我们新建的对象为什么能够使用 toString() 等方法的原因。
// 特点：
// JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与
// 之相关的对象也会继承这一改变。

// 获取原型的方法？
// a.proto
// a.constructor.prototype
// Object.getPrototypeOf(p)
// let a = {}
// console.log(Object.getPrototypeOf(a), a.__proto__, a.constructor.prototype);

// 在 js 中不同进制数字的表示方式
// 以 0X、0x 开头的表示为十六进制。
// 以 0、0O、0o 开头的表示为八进制。
// 以 0B、0b 开头的表示为二进制格式。
// const a = 0X13
// const b = 0O13
// const c = 0B11
// console.log(a, b, c, typeof a, typeof NaN);

// js 中整数的安全范围是多少？
// 安全整数指的是，在这个范围内的整数转化为二进制存储的时候不会出现精度丢失，能够被“安全”呈现的最大整数是 2^53 - 1，
// 即9007199254740991，在 ES6 中被定义为 Number.MAX_SAFE_INTEGER。最小整数是-9007199254740991，在 ES6 中
// 被定义为 Number.MIN_SAFE_INTEGER。
// 如果某次计算的结果得到了一个超过 JavaScript 数值范围的值，那么这个值会被自动转换为特殊的 Infinity 值。如果某次
// 计算返回了正或负的 Infinity 值，那么该值将无法参与下一次的计算。判断一个数是不是有穷的，可以使用 isFinite 函数
// 来判断。
//  
// let a = 9007199254740991
// a = a + 13
// const b = a
// console.log(a, isFinite(a + 1000), a > Number.MAX_SAFE_INTEGER, a + 1, b, Number.MAX_VALUE.toString(16));

// typeof NaN 的结果是什么？
// NaN 意指“不是一个数字”（not a number），NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出
// 数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。
// typeof NaN; // "number"
// NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 x === x 不成立）的值。而 NaN != NaN
// 为 true。
// console.log(NaN != NaN, NaN == NaN, null != null, undefined != undefined);

// isNaN 和 Number.isNaN 函数的区别？
// 函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true，因此非数字值传入也会
// 返回 true ，会影响 NaN 的判断。
// 函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，这种方法对于 NaN 的判断更为
// 准确。
// console.log(isNaN('a'), Number.isNaN('a'));

// Array 构造函数只有一个参数值时的表现？
// Array 构造函数只带一个数字参数的时候，该参数会被作为数组的预设长度（length），而非只充当数组中的一个元素。这样
// 创建出来的只是一个空数组，只不过它的 length 属性被设置成了指定的值。
// 构造函数 Array(..) 不要求必须带 new 关键字。不带时，它会被自动补上。
// const a = Array(3)
// const b = new Array(3)
// console.log(a, b);
// const c = Number(1)
// const d = new Number(1)
// console.log(c, d, d == 1, d === 1);

// 其他值到字符串的转换规则？
// 规范的 9.8 节中定义了抽象操作 ToString ，它负责处理非字符串到字符串的强制类型转换。
// （1）Null 和 Undefined 类型 ，null 转换为 "null"，undefined 转换为 "undefined"，
// （2）Boolean 类型，true 转换为 "true"，false 转换为 "false"。
// （3）Number 类型的值直接转换，不过那些极小和极大的数字会使用指数形式。
// （4）Symbol 类型的值直接转换，但是只允许显式强制类型转换，使用隐式强制类型转换会产生错误。
// （3）对普通对象来说，除非自行定义 toString() 方法，否则会调用 toString()（Object.prototype.toString()）
//     来返回内部属性 [[Class]] 的值，如"[object Object]"。如果对象有自己的 toString() 方法，字符串化时就会
//     调用该方法并使用其返回值。
// const a = Number.MAX_VALUE 
// console.log(Object.prototype.toString.call(Number.MAX_VALUE), a.toString());

// 其他值到数字值的转换规则？
// 有时我们需要将非数字值当作数字来使用，比如数学运算。为此 ES5 规范在 9.3 节定义了抽象操作 ToNumber。
// （1）Undefined 类型的值转换为 NaN。
// （2）Null 类型的值转换为 0。
// （3）Boolean 类型的值，true 转换为 1，false 转换为 0。
// （4）String 类型的值转换如同使用 Number() 函数进行转换，如果包含非数字值则转换为 NaN，空字符串为 0。
// （5）Symbol 类型的值不能转换为数字，会报错。
// （6）对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。
// 为了将值转换为相应的基本类型值，抽象操作 ToPrimitive 会首先（通过内部操作 DefaultValue）检查该值是否有valueOf() 方法。如果有并且返回基本类型值，就使用该值进行强制类型转换。如果没有就使用 toString() 的返回值（如果存在）来进行强制类型转换。
// 如果 valueOf() 和 toString() 均不返回基本类型值，会产生 TypeError 错误。
// const a = true
// const b = 'asfsaf1'
// const c = '111saf'
// // parseInt 能转换首字母是数字的
// console.log(Number(a), Number(b), Number(c), parseInt(c, 2), parseInt(b), parseInt(a));
// const a = '11'
// console.log(a.valueOf(), a.toString());

// {} 和 [] 的 valueOf 和 toString 的结果是什么？
// {} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"
// [] 的 valueOf 结果为 [] ，toString 的结果为 ""
// console.log([].toString(), Object.prototype.toString.call([]), {}.toString());

// ~ 操作符的作用？
// ~ 返回 2 的补码，并且 ~ 会将数字转换为 32 位整数，因此我们可以使用 ~ 来进行取整操作。
// ~x 大致等同于 -(x+1)。
// console.log(~~1, ~4)

// + 操作符什么时候用于字符串的拼接？
// 根据 ES5 规范 11.6.1 节，如果某个操作数是字符串或者能够通过以下步骤转换为字符串的话，+ 将进行拼接操作。如果其
// 中一个操作数是对象（包括数组），则首先对其调用 ToPrimitive 抽象操作，该抽象操作再调用 [[DefaultValue]]，以
// 数字作为上下文。如果不能转换为字符串，则会将其转换为数字类型来进行计算。
// 简单来说就是，如果 + 的其中一个操作数是字符串（或者通过以上步骤最终得到字符串），则执行字符串拼接，否则执行数字
// 加法。
// 那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字。
// const a = {} + []
// console.log([1, 2] + '', [1, 2] + 3, 3+[1, 2], {1:2, 2: 3} + '', []+{}, {}+[], +[], a);

// 什么情况下会发生布尔值的隐式强制类型转换？
// （1） if (..) 语句中的条件判断表达式。
// （2） for ( .. ; .. ; .. ) 语句中的条件判断表达式（第二个）。
// （3） while (..) 和 do..while(..) 循环中的条件判断表达式。
// （4） ? : 中的条件判断表达式。
// （5） 逻辑运算符 ||（逻辑或）和 &&（逻辑与）左边的操作数（作为条件判断表达式）。

// || 和 && 操作符的返回值？
// || 和 && 首先会对第一个操作数执行条件判断，如果其不是布尔值就先进行 ToBoolean 强制类型转换，然后再执行条件
// 判断。
// 对于 || 来说，如果条件判断结果为 true 就返回第一个操作数的值，如果为 false 就返回第二个操作数的值。
// && 则相反，如果条件判断结果为 true 就返回第二个操作数的值，如果为 false 就返回第一个操作数的值。
// || 和 && 返回它们其中一个操作数的值，而非条件判断的结果

// Symbol 值的强制类型转换？
// ES6 允许从符号到字符串的显式强制类型转换，然而隐式强制类型转换会产生错误。
// Symbol 值不能够被强制类型转换为数字（显式和隐式都会产生错误），但可以被强制类型转换为布尔值（显式和隐式结果
// 都是 true ）。

// == 操作符的强制类型转换规则？
//  (1）字符串和数字之间的相等比较，将字符串转换为数字之后再进行比较。
// （2）其他类型和布尔类型之间的相等比较，先将布尔值转换为数字后，再应用其他规则进行比较。
// （3）null 和 undefined 之间的相等比较，结果为真。其他值和它们进行比较都返回假值。
// （4）对象和非对象之间的相等比较，对象先调用 ToPrimitive 抽象操作后，再进行比较。
// （5）如果一个操作值为 NaN ，则相等比较返回 false（ NaN 本身也不等于 NaN ）。
// （6）如果两个操作值都是对象，则比较它们是不是指向同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true，否则，返回 false。
// 复制代码
// a = {a: 1}
// console.log(1 == '1', 1 == true, '1' == true, 2 == true, null == undefined, NaN == NaN, {a: 1} == '{a: 1}', {a: 1} == {a: 1}, a == a, null == null, null === null);

// 如何将字符串转化为数字，例如 '12.3b'?
// （1）使用 Number() 方法，前提是所包含的字符串不包含不合法字符。
// （2）使用 parseInt() 方法，parseInt() 函数可解析一个字符串，并返回一个整数。还可以设置要解析的数字的基数。当基数的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。
// （3）使用 parseFloat() 方法，该函数解析一个字符串参数并返回一个浮点数。
// （4）使用 + 操作符的隐式转换。

// 如何将字符串转化为数字，例如 '12.3b'?
// （1）使用 Number() 方法，前提是所包含的字符串不包含不合法字符。
// （2）使用 parseInt() 方法，parseInt() 函数可解析一个字符串，并返回一个整数。还可以设置要解析的数字的基数。当基数的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。
// （3）使用 parseFloat() 方法，该函数解析一个字符串参数并返回一个浮点数。
// （4）使用 + 操作符的隐式转换。
// console.log(Number('12.3b'), parseInt('12.3b'), parseFloat('12.3b'), +'12.3b', +'12.3', 12 + +'12.3');

// 如何将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为『12,000,000.11』?
// function format(num) {
//   return num && num.replace(/(?!^)(?=(\d{3})+\.)/g, ",")
// }
// console.log(format('12000000.1'));

// 如何实现数组的随机排序？
// （1）使用数组 sort 方法对数组元素随机排序，让 Math.random() 出来的数与 0.5 比较，如果大于就返回 1 交换位置，如果小于就返回 -1，不交换位置。
// function randomSort(a, b) {
//   return Math.random() > 0.5 ? -1 : 1;
// }
//  缺点：每个元素被派到新数组的位置不是随机的，原因是 sort() 方法是依次比较的。
// （2）随机从原数组抽取一个元素，加入到新数组
// function randomSort(arr) {
//   var result = [];
//   while (arr.length > 0) {
//     var randomIndex = Math.floor(Math.random() * arr.length);
//     result.push(arr[randomIndex]);
//     arr.splice(randomIndex, 1);
//   }
//   return result;
// }
// // （3）随机交换数组内的元素（洗牌算法类似）
// function randomSort(arr) {
//   var index,
//     randomIndex,
//     temp,
//     len = arr.length;
//   for (index = 0; index < len; index++) {
//     randomIndex = Math.floor(Math.random() * (len - index)) + index;
//     temp = arr[index];
//     arr[index] = arr[randomIndex];
//     arr[randomIndex] = temp;
//   }
//   return arr;
// }
// // es6
// function randomSort(array) {
//   let length = array.length;

//   if (!Array.isArray(array) || length <= 1) return;
//   for (let index = 0; index < length - 1; index++) {
//     let randomIndex = Math.floor(Math.random() * (length - index)) + index;
//     [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
//   }
//   return array;
// }

// javascript 创建对象的几种方式？
// 我们一般使用字面量的形式直接创建对象，但是这种创建方式对于创建大量相似对象的时候，会产生大量的重复代码。但 js
// 和一般的面向对象的语言不同，在 ES6 之前它没有类的概念。但是我们可以使用函数来进行模拟，从而产生出可复用的对象
// 创建方式，我了解到的方式有这么几种：
// （1）第一种是工厂模式，工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系。
// （2）第二种是构造函数模式。js 中每一个函数都可以作为构造函数，只要一个函数是通过 new 来调用的，那么我们就可以把它称为构造函数。执行构造函数首先会创建一个对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 this 指向这个对象，最后再执行整个函数，如果返回值不是对象，则返回新建的对象。因为 this 的值指向了新建的对象，因此我们可以使用 this 给对象赋值。构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此我们可以通过原型来识别对象的类型。但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，那么每次我们都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的。
// （3）第三种模式是原型模式，因为每一个函数都有一个 prototype 属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此我们可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数对象的复用问题。但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如 Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。
// （4）第四种模式是组合使用构造函数模式和原型模式，这是创建自定义类型的最常见方式。因为构造函数模式和原型模式分开使用都存在一些问题，因此我们可以组合使用这两种模式，通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。这种方法很好的解决了两种模式单独使用时的缺点，但是有一点不足的就是，因为使用了两种不同的模式，所以对于代码的封装性不够好。
// （5）第五种模式是动态原型模式，这一种模式将原型方法赋值的创建过程移动到了构造函数的内部，通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。这一种方式很好地对上面的混合模式进行了封装。
// （6）第六种模式是寄生构造函数模式，这一种模式和工厂模式的实现基本相同，我对这个模式的理解是，它主要是基于一个已有的类型，在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也达到了扩展对象的目的。它的一个缺点和工厂模式一样，无法实现对象的识别。

// 变量提升
var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
      var name = 'Jack';
      console.log('Goodbye ' + name);
    } else {
      console.log('Hello ' + name);
    }
})();

// 全局变量提升
(function() {
  var x = y = 1;
})();
console.log(y);
// 报错x未定义
// console.log(x);

// 输出Goodbye Jack

// 最大值问题，超出最大值
var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
// for (var i = START; i <= END; i++) { 
//   count++;
// }
// console.log(count);
// 输出 true Math.pow(2, 53)
console.log('END', END + 1 == END, END + 1);

// 过滤器不会处理未被定义的元素
var ary = [0,1,2];
ary[10] = 10;
let ary123 = ary.filter(function(x) {
  // console.log('x', x);
  return x === undefined;
});
ary.forEach(item => {
  // console.log('item', item);
})
let maparr = ary.map(item => {
  console.log('map', item);
  return item === 0
})
for(item of ary){
  // console.log('item1', item);
}
for(let i =0; i<ary.length; i++ ) {
  // console.log('item2', ary[i]);

}
console.log(ary, ary123, maparr);

// 双精度问题
var two = 0.2;
var one = 0.1;
var eight = 0.8;
var six = 0.6;
[two - one == one, eight - six == two]
console.log('two - one, eight - six', two - one, eight - six, eight-0.1);

// 正则表达式实例   每个正则表达式都是一个实例
var a = /123/;
var b = /123/;
a == b;
a === b;

// 最后一个逗号不计入数组 
[,,,].join(", ")
// ", , "

// 隐式转换
// 对象非对象比较会转换该对象再进行比较，优先调toString()方法，其次valueOf方法, 最后是Object的toString()方法
const x1 = {
  val: 0,
  valueOf: () => {
    x1.val ++ 
    return x1.val
  }
}
const x2 = {
  val: 0,
  toString: () => {
    x2.val ++ 
    return x2.val
  }
}
// x1 == 1 && x1 == 2 && x1 ==3