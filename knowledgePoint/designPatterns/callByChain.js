// 链式调用

// 被调用的方法加入原型链中，调用后返回this来实现

const chainObj = (function(){
  function AObg(){
    this.a = 1
    
  }
  AObg.prototype = {
    addA: function(num=1) {
      this.a +=num
      return this
    },
    setA: function(num=10) {
      this.a = num
      return this
    },
    doubleA: function(){
      this.a *= 2
      return this
    }
  }
  return new AObg()
})()
console.log('chainObj', chainObj, chainObj.addA(2).doubleA().addA(4).doubleA().setA(99));

// 使用proxy链式操作
const chainObj2 =(num) => (function(value){
  // 链式栈
  let funcStack = []
  // 链式方法
  let funcs = {
    double: n => n * 2,
    pow: n => n * n,
    reverseInt: n => n.toString().split("").reverse().join("") | 0
  }
  let proxyObj = new Proxy({}, {
    get: function(proObj, fnName){
      if(fnName === 'get'){
        // 释放栈
        return funcStack.reduce(function(val, fn){
          return fn(val)
        }, value)

      }
      // 入栈操作
      funcStack.push(funcs[fnName])
      return proxyObj
    }
  })
  return proxyObj
})(num)
console.log('chainObj2(3).double.pow.reverseInt.get', chainObj2(3).double.pow.reverseInt.get);