interface Person {
  readonly id?: number,
  name: string,
  age: number,
  birthday?: string | number
}

let a: Person = {
  id: 123,
  name: ';',
  age: 1
}
// a.a = 1
// a.age = '1'
a = {
  name: '11',
  age: 2
}
// a.name = 1
a.birthday = 1
a.birthday = '1'

// 描述函数
interface Add{
  (x: number, y:number):number
}
let b: Add = (x: number, y: number) => { return x+y }
function add(x: number, y: number): number {
  return x + y
}
const c: Add = function(x: number, y: number) {
  return x+y 
}

interface EvenOne {
  [propName: string]: string
}
const dd: EvenOne = {
  a: '1',
  b: '2'
}
// 类数组
interface NumberArr {
  [propName: number]: string
} 
const acd: NumberArr = [ '12', '22' ]
// const aaa: NumberArr = { 1: 2 }
// acd.push('222')

// duck typing 鸭子类型
interface FunctionAndProps {
  (x: number): number,
  fnName: string
}
const aa: FunctionAndProps = (x: number) => {
  return x
}
aa.fnName = 'aaa'


// 约束类
interface MusicInterface {
  paltMusic(): void
}

class Cellphone implements MusicInterface {
  paltMusic() {
      
  }
}
class Car implements MusicInterface {
  paltMusic(): void {
      
  }
}

interface CallInterface {
  makePhoneCall(): void,  // 方法
  id: string  // 属性
}

class Phone implements MusicInterface, CallInterface{
  paltMusic(): void {}
  makePhoneCall(): void {}
  id: string
  constructor(){

  }
}
// 约束构造函数和静态属性
interface CircleStatic {
  id: number  // 静态属性
  new (radius: number, dd: number): void   // 构造函数
}
const Circle: CircleStatic = class Circle {
  static id = 1
  radius: number
  // radius: number
  aa: number
  constructor(radius: number, aa: number){
    this.radius = radius
    this.aa = aa
  }
}
