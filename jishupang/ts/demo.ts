// // 静态数字类型
// const num:Number = 30

// // 自定义静态类型
// interface Person {
//   name: string,
//   age: number
// }
// const person1: Person = {
//   name: 'xiaoming',
//   age: 16
// }
// // console.log(person1)

// // 对象类型
// const person2: {
//   name: string,
//   age: number
// } = {
//   name: 'ming',
//   age: 98
// }
// // console.log(person2)

// // 指定字符串数组
// const sttArr: string[] = ['hello', 'world']

// // class类
// class Player {
//   level: number
//   attack: number
// }
// const player1: Player = {
//   level: 1,
//   attack: 200
// }
// // console.log(player1)

// // 指定函数返回值
// const strFn: () => string = () => {
//   const str = 'hello'
//   return str
// }
// // console.log(strFn())

// 类型注解 推断
// let uname: string
// uname = 'li'

// function sum(a: number, b: number): number {
//   return a + b
// }
// // console.log(sum(1, 2))

// // 无返回值
// function out(): void {
//   console.log('out')
// }
// // out()

// function errNever(): never {
//   throw new Error('err')
// }

// // 参数为对象
// // interface interArg {
// //   a: number,
// //   b: number
// // }
// // function argObj(obj: interArg): number {
// //   console.log(obj.a)
// //   console.log(obj.b)
// //   return obj.a + obj.b
// // }

// // function argObj(obj: {
// //   a: number,
// //   b: number
// // }): number {
// //   console.log(obj.a)
// //   console.log(obj.b)
// //   return obj.a + obj.b
// // }

// function argObj({a, b}: {a: number, b: number}): number {
//   console.log(a)
//   console.log(b)
//   return a + b
// }
// argObj({a: 1, b: 2})

// 数组元素多种类型
const multipleArr: (number | boolean | string)[] = [1, 'string', true]

// 元组 对应固定类型
const multipleArr2: [number, string, boolean] = [1, 'string', true]

// 类型别名
// const person: {name: string, age: number}[] = [
//   {name: 'wang', age: 12},
//   {name: 'li', age: 12}
// ]

// type personType = {
//   name: string,
//   age: number
// }
// const person: personType[] = [
//   {name: 'wang', age: 12},
//   {name: 'li', age: 12}
// ]

// class personType {
//   name: string;
//   age: number;
// }
// const person: personType[] = [
//   {name: 'wang', age: 12},
//   {name: 'li', age: 12}
// ]

// Interface