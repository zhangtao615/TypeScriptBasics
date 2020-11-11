class Person5 {
  constructor(public readonly name: string) {}
}

const person5 = new Person5('Tom')
// readonly 只能读不能改
// person5.name = 'Jerry' 不允许

console.log(person5.name)