//基础类型 null undefined symbol boolean void number string
let count: number = 123;
let teacher: string = 'name';

//类型注解 type annotation 在变量后面写出变量类型
// 类型推断 type interface ts自己推断变量类型

let numAnnotation: number = 123;
let numInterface = 123;

// 对象类型 {}， Class, function  []

// 申明函数写法
const func = (str: string) => {
  return parseInt(str, 10);
};

const func2: (str: string) => number = (str) => {
  return parseInt(str, 10);
};

interface Person {
  name: string;
}
const rawData = '{"name": "Tom"}';
const newData: Person = JSON.parse(rawData);

let temp: number | string = 123;
temp = '123';
