let a11 
a11 = 1
a11= '1'

let b1 = 1
// b1 = '1'

function printAge(age = 18) {
  console.log(age);
  return age
  
}
// printAge('12')

interface TestInterface {
  (): string
}
// const printAge1: TestInterface = printAge

//最佳通用类型
let arr11 = [0, 1, null, 'lin'];
arr11[4] = null
arr11[5] = undefined
// arr11[6] = true

type arrItem = number | string
let arr12: arrItem[] = [undefined, 1, '1', null, 'true']

// js八种内置类型
type enumJs = string | number | boolean | undefined | null | object | bigint | symbol
// ECMAScript 的内置对象
type enumEs = Array<number> | Date | Error | RegExp 
// DOM 和 BOM
type enumDom = HTMLElement | NodeList | MouseEvent