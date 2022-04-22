class Person1 {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayName() {
    console.log(this.name);
  }
  // 私有类
  private sex: string = 'nan'
  saySex(){
    console.log(this.sex);
  }
  // 保护类
  protected birthday: string = '19980203'
  sayBirthday(){
    console.log(this.birthday);
  }
  // 静态值
  static ids: number = 1001
  sayIsd() {
    console.log(Person1.ids)
  }
}
let person1 = new Person1('zhangsan')
console.log(1111, person1);
person1.sayName()
person1.sayBirthday()
person1.sayIsd()
// person1.sex
// person1.ids
class Student extends Person1 {
  age: number
  constructor(name: string, age: number){
    super(name)
    this.age = age
  }
  sayBirthday() {
    console.log(this.birthday + '123');
  }
}

let stuent1 = new Student('1',1)
stuent1.saySex()
stuent1.sayBirthday()
stuent1.sayIsd()
// stuent1.birthday
console.log(2222, stuent1);

// 抽象类
abstract class AbsPerson{
  name: string
  constructor(name: string){
    this.name = name
  }
  abstract sayName():void
}
// const abs1 = new AbsPerson
class Son2 extends AbsPerson{
  age: number
  constructor(name:string, age: number) {
    super(name)
    this.age = age
  }
  sayName(){
    console.log(this.name);
    
  }
}
const son123 = new Son2('son2', 18)
console.log(son123);
son123.sayName()

// 类实现链式调用

class StudyStep {
  step1(){
    console.log('step1');
    return this
  }
  step2(){
    console.log('step2');
    return this
  }
}
const study1 = new StudyStep()
study1.step1().step2()

class MyStudy extends StudyStep {
  next(){
    console.log('continue');
    return this
  }
}
const myStudy1 = new MyStudy()
myStudy1.step1().next().step2().next()