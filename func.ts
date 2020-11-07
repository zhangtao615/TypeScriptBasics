// ts中定义函数以及函数返回值

// function add(first: number, second: number): number {
//   return first + second;
// }

// function sayHello(): void {
//   console.log("hello");
// }

// function errorEmitter(): never {
//   //返回类型nerver表示函数永远都不会执行到最后
//   throw new Error();
// }

function add({ first, second }: { first: number; second: number }): number {
  // 解构参数时语法注解
  return first + second;
}
