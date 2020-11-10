// 当变量被private修饰时，可以用get来获取变量，可以保护私有变量

// class Person4 {
//   constructor (private _name: string) {};
//   get name () {
//     return this._name;
//   }
//   set name (name: string) {
//     this._name = name
//   }
// }

// const person4 = new Person4('Tom');
// console.log(person4.name)
// person4.name = 'Jerry'
// console.log(person4.name)

// 单例模式

class Demo {
  private static instance: Demo 
  // private禁止使用new实例化对象
  private constructor (public name: string) {}
  static getInstance(name: string) {
    if (!this.instance) {
      this.instance = new Demo(name)
    }
    return this.instance
  }
}

const demo1 = Demo.getInstance('Tom')
const demo2 = Demo.getInstance('Jerry')
console.log(demo1)// Tom
console.log(demo2)// Tom