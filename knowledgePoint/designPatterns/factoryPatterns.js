// 简单工厂
const BookShop = function(){

}
function Abook(){
  this.type = 'A'
}
function Bbook(){
  this.type = 'B'
}
function Dbook(){
  this.type = 'D'
}
BookShop.prototype = {
  sellBook: function(type){
    let book
    switch (type) {
      case 'a':
        book = new Abook()
        break;
    
      case 'b':
        book = new Bbook()
        break;
    
      default:
        book = new Dbook()
        break;
    }
  }
}

// 简单工厂模式
// 每次修改必须需要修改BookShop，不利于改造
// 将sellBook抽离
const factoryBook = {
  createBook: function(type){
    let book
    switch (type) {
      case 'a':
        book = new Abook()
        break;
    
      case 'b':
        book = new Bbook()
        break;
    
      default:
        book = new Dbook()
        break;
    }
  }
}

BookShop.prototype = {
  sellBook: function(type){
    return factoryBook.createBook(type)
  }

}
