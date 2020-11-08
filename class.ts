// 定义一个Person类
class Person {
  name: string = 'Tom';
  getName() {
    return this.name;
  }
}
//定义一个Teacher类继承Person类
class Teacher extends Person {
  // 子类可以重写父类的方法，调用super可以重新指向父类
  getName() {
    return super.getName();
    // return 'Bob';
  }
  getTeacherName() {
    return 'Jerry';
  }
}

const person3 = new Person();
const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());

//访问类型 public private protected

//public 允许在类外调用
//private 允许在类内部进行调用
//protected 允许在类内及继承的子类使用
class Animal {
  protected name: string;
  eat() {
    return 'eat';
  }
}

class Cat extends Animal {
  name: 'Tom';
  catEat() {
    this.name;
  }
}
