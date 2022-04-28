// 单体模式， 实例化一次，提供访问节点
const singleA = {
  a: 1,
  b: 2,
  getA: function () {
    return this.a;
  },
};
console.log("singleA", singleA.getA());

// 使用命名空间包裹, 避免被污染
const SingleGroup = {
  singleA: {
    a: 1,
    b: 2,
    getA: function () {
      return this.a;
    },
  },
};

const MyNamespace = {};
// 闭包存储
MyNamespace.singleB = (function () {
  let a = 1;
  function privateFn1() {
    a = 2;
  }
  function publicFn1() {
    return a * a;
  }
  return {
    a,
    publicFn1,
    publicFn2: function () {
      privateFn1();
    },
  };
})();

console.log(
  "MyNamespace.singleB",
  MyNamespace.singleB.a,
  MyNamespace.singleB.publicFn2(),
  MyNamespace.singleB.publicFn1()
);
// MyNamespace.singleB.privateFn1()

// 惰性加载, 使用的时候创建实例
MyNamespace.singleB = (function () {
  let data = undefined;
  function constructor() {
    let a = 1;
    function privateFn1() {
      a = 2;
    }
    function publicFn1() {
      return a * a;
    }
    console.log('实例化一次');
    return {
      a,
      publicFn1,
      publicFn2: function () {
        privateFn1();
      },
    };
  }
  return {
    getData: function(){
      if(!data){
        data = constructor()
      }
      return data
    }
  }
})();
console.log(
  "MyNamespace.singleB--getData",
  MyNamespace.singleB.getData().a,
  MyNamespace.singleB.getData().publicFn2(),
  MyNamespace.singleB.getData().publicFn1()
);

let condition = 1
// 分支技术，在单体创建时判断需要执行的部分就可以
MyNamespace.singleC = (function(){
  if(condition === 1) {
    return { a: 1 }
  } else if(condition === 2){
    return { b: 2 }
  }
})()