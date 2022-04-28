// 门户大开对象

let Book = function(isbn, title){
  // this.isbn = isbn
  // this.title = title
  this.setIsbn(isbn)
  this.setTitle(title)
}
Book.prototype = {
  setIsbn: function(isbn){
    this.isbn = isbn
  },
  setTitle: function(title){
    this.title = title
  }
}
const bookAbc =new Book('abc', '要上架了')
console.log('bookAbc', bookAbc);

// 利用作用域、嵌套函数、闭包

function foo() {
  let a = 10
  function bar() {
    a*=2
    return a
  }
  return bar
}
let bbb = foo()
console.log('bbb()', bbb());
console.log('bbb()', bbb());
console.log('bbb()', bbb());

// 闭包实现私有化
let Book2 = function(isbnNew, titleNew) {
  // 私有变量
  let isbn, title
  // 私有方法
  function checkIsbn(isbn) {
    console.log('isbnIsChecked', isbn);

  }
  this.setIsbn = function(isbnNew){
    if(!checkIsbn(isbnNew)){
      console.log('检查不通过');
    }
    isbn = isbnNew
  }
  this.setTitle = function(titleNew){
    title = titleNew
  }
  this.getIsbn = function() {
    return isbn
  }
  this.getTitle = function() {
    return title
  }
  this.setIsbn(isbnNew)
  this.setTitle(titleNew)
}

let bookDD = new Book2('DD', '要下架了')
console.log('bookDD', bookDD.getIsbn());

// 常量
// 保护、闭包、方法获取，构造函数包了一层行程局部作用域，闭包存储了一个不修改的变量，通过构造函数增加属性的方式读取
Classa = function(){
  let abc = 1
  const buildClass = function(){

  }
  buildClass.getAbc = function () {
    console.log('Classa', abc);
    return abc
  }
  return buildClass
}()
Classa.getAbc()
const aclas = new Classa()

console.log(aclas instanceof Classa);