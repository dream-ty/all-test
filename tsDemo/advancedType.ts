// 联合类型

let aa12: number | string
aa12 = 1
aa12 = '1'
aa12.length

// 交叉类型

interface Person12 {
  name: string,
  age: number
}

type Studeng12 = Person12 & {
  birthday: string
}

const studeng12:Studeng12 = {
  name: '1',
  age: 2,
  birthday: '12'
}

// 字符串函数联合
type Name = string
type Sayname = () => string
type MixNameSayname = Name | Sayname
function aaaa(a: MixNameSayname):Name{
  if(typeof a === 'string'){
    return a
  }
  if(typeof a === 'function') {
    return a()
  }
  return ' '
}
aaaa(() => { return '123'
})

// type 和 interface 的区别
interface Person111 {
  name: string
}
const person111: Person111 = {
  name: '1'
}

type Person222 = {
  name: string
}
const person222: Person222 = {
  name: '1'
}

// any类型转换，不污染
function testAny(val: any) {
  return val
}
testAny(1)
function testAny1<T extends any>(val: T){
  return val
}
testAny1(1)
testAny1('1')
console.log('typeof(testAny1(', typeof(testAny1('1')), typeof(testAny1({a: `1`})));


