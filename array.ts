const arr: number[] = [1, 2, 3]; //数组中只能有一种类型
const arr2: (number | string)[] = [1, 2, '3']; // 数组中能同时有number和string两种类型

const objArr: { name: string }[] = [
  {
    name: 'Tom',
  },
];

//当对象中的项较多时，可以使用类型别名
// type alias 类型别名

type User = { name: string; age: number; gender: string };
const objArr2: User[] = [
  {
    name: 'Tom',
    age: 18,
    gender: 'male',
  },
];

// 还可以定义一个Class类
class Person {
  name: string;
  age: number;
}

const objArr3: Person[] = [
  {
    name: 'Tom',
    age: 18,
  },
];
