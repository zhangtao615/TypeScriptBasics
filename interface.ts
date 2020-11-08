// 有通用类型的集合，可以定义一个接口
interface Person {
  name: string;
  age?: number;
  [propName: string]: any; //可以在后面添加一些符合的项
  say(): string;
}
//接口继承Person
interface Teacher extends Person {
  teach(): string;
}
//申明函数接口
interface SayHi {
  (word: string): string;
}

const getPersonName = (person: Teacher) => {
  console.log(person.name, person.age);
};

const setPersonName = (person: Person, name: string) => {
  person.name = name;
  console.log(person);
};

let person = {
  name: 'Tom',
  age: 18,
  say() {
    return 'say hello';
  },
  teach() {
    return 'teach';
  },
};

getPersonName(person);
setPersonName(person, 'Jerry');

class User implements Person {
  name: string;
  say() {
    return 'hello';
  }
}

const say: SayHi = (word: string) => {
  return word;
};
say('hi');
