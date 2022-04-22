// unknown 加 断言正确校验
function divide(param: unknown) {
  return param as number /2

}

// 元组

let arr1: [string, number] = [ '1', 2 ]
arr1[1] =1
// arr1[2] =1
// arr1.push(true)
arr1.push(1)
// arr1.pop(0)

function add1(x: number, y: number): number{
  return x + y
}

let add21 = (x: number, y: number, z?: number): number => {
  return x + y
}

function add31(x: number = 100, y: number): number{
  return x + y
}
add31(undefined,10)
// add31(null,10)   // 无法使用 void 0 为undefined
// add21 = () => { }
const add3: (x: number, y: number) => number = add21
add21 = (): number => { return 1 }

// 函数重载
function aadd(x: number[]): number
function aadd(x: string[]): string
function aadd(x: any[]) {
  if (typeof x[0] === 'string') {
    return x.join()
  }
  if (typeof x[0] === 'number') {
    return x.reduce((acc, cur) => acc + cur)
  }
}
// aadd([true])
// 泛类型  TODO: 待修改
// function badd<T>(x: T[]): T{
//   if (typeof x[0] === 'number') {
//     return x.reduce((acc, cur) => acc + cur)
//   }
//   if (typeof x[0] === 'string') {
//     return x.join()
//   }
//   // return x[0]
// }
//  badd<number>([12])
//  badd<string>(['1'])