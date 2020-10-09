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
// const multipleArr: (number | boolean | string)[] = [1, 'string', true]

// 元组 对应固定类型
// const multipleArr2: [number, string, boolean] = [1, 'string', true]

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

// 接口定义
// interface Girl {
//   name: string;
//   age: number;
//   bust: number;
//   waistline?: number; // 非必填
//   [propname: string]: any; // 字符串属性名 任意值
//   say(): string; // 函数方法
// }

// const filterGirl = function(girl: Girl) {
//   if (girl.age < 24 && girl.bust > 90) {
//     return true
//   }
//   return false
// }

// const getGirlInfo = function(girl: Girl) {
//   let info = `${girl.name}、${girl.age}、${girl.bust}`
//   if (girl.waistline) {
//     info += `、${girl.waistline}`
//   }
//   if (girl.sex) {
//     info += `、${girl.sex}`
//   }
//   return info
// }

// const girlPerson = {
//   name: 'hong',
//   age: 23,
//   bust: 92,
//   waistline: 30,
//   sex: '女',
//   say() {
//     return 'hello world'
//   }
// }

// // console.log(getGirlInfo(girlPerson))
// // console.log(filterGirl(girlPerson) ? '通过' : '未通过')

// // 接口和类的约束
// class NewGirl implements Girl {
//   name = 'NewGirl';
//   age = 23;
//   bust = 92;
//   waistline = 30;
//   sex = '女';
//   say() {
//     return 'hello world'
//   }
// }
// const newGirl1 = new NewGirl()
// // console.log(newGirl1)

// // 接口继承
// interface Teacher extends Girl {
//   isTeacher(): boolean
// }

// const teacherGirl = function(girl: Teacher) {
//   return girl.isTeacher()
// }
// const teacher = {
//   name: 'hong',
//   age: 23,
//   bust: 92,
//   waistline: 30,
//   sex: '女',
//   say() {
//     return 'hello world'
//   },
//   isTeacher() {
//     return true
//   }
// }
// console.log(teacherGirl(teacher))

// ts中的类
// class Lady {
//   content = 'hello'
//   getContent() {
//     return this.content
//   }
// }

// // const lady1 = new Lady()
// // console.log(lady1.getContent())

// class Girl extends Lady {
//   name = 'Girl'
//   getName() {
//     return this.name
//   }
//   // 重写父类方法
//   getContent() {
//     // return 'reset getContent'
//     // super 调用父类方法
//     return super.getContent() + ' => reset getContent'
//   }
// }

// const girl1 = new Girl()
// console.log(girl1.getContent())
// console.log(girl1.getName())

// 类的访问类型
// class Person {
//   public name: string;

//   private age: number = 12;

//   protected sex: string = '男'

//   getAge() {
//     return this.age
//   }
// }

// const person = new Person();
// person.name = "jspang.com";

// console.log(person.name);
// console.log(person.getAge());

// class ChildPerson extends Person {
//   getSex() {
//     return this.sex
//   }
// }

// const childPerson1 = new ChildPerson()
// console.log(childPerson1.getSex())

// 类的构造函数
// class Person {
//   constructor(public name: string){

//   }
// }

// const person1 = new Person('wang')
// console.log(person1.name)

// // 继承子类中的构造函数
// class ChildPerson extends Person {
//   constructor(public childName: string) {
//     super('Person')
//   }
// }

// const childPerson1 = new ChildPerson('childPerson1')
// console.log(childPerson1)

// 类里的只读属性 readonly
// class Person {
//   // public readonly _name: string
//   constructor(readonly name: string) {}
// }
// const person1 = new Person('xiaoli')
// console.log(person1)
// // person1.name = 'ming'

// tsconfig.json
// function test(str: string) {
//   console.log(str)
// }
// test('1')

// export const name = "xiaoli";

/**
 * 联合类型展示
 */
// interface Waiter {
//   anjiao: boolean;
//   say: () => {};
// }

// interface Teacher {
//   anjiao: boolean;
//   skill: () => {};
// }

// 类型保护-类型断言
// function isSelect (type: Waiter | Teacher) {
//   if (type.anjiao) {
//     (type as Teacher).skill()
//   } else {
//     (type as Waiter).say()
//   }
// }
// isSelect({anjiao: true, skill: () => {
//   console.log('skill')
//   return {}
// }})

// 类型保护-in 语法
// function isSelect (type: Waiter | Teacher) {
//   if ('say' in type) {
//     type.say()
//   } else {
//     type.skill()
//   }
// }
// isSelect({anjiao: true, skill: () => {
//   console.log('skill')
//   return {}
// }, say: () => {
//   console.log('say')
//   return {}
// }})

// 类型保护-typeof 语法
// function add(first: string | number, second: string | number) {
//   if (typeof first === 'string' || typeof second === 'string') return first + '+' + second
//   return first + second
// }
// // console.log(add('hello', 'world'))
// console.log(add(1, '1'))

// 类型保护-instanceof 语法
// class NumberObj {
//   count: number = 1;
// }

// function addObj(first: object | NumberObj, second: object | NumberObj) {
//   if (first instanceof NumberObj && second instanceof NumberObj) {
//     return first.count + second.count
//   }
//   return 0
// }
// console.log(addObj(new NumberObj(), new NumberObj()))

// 枚举
// enum Status {
//   online,
//   offLine,
//   awaitOrder
// }

// enum Status {
//   online = 1,
//   offLine,
//   awaitOrder
// }
// console.log(Status.offLine, Status[1])

/**
 * 
 * 函数泛型 
 */
// 参数类型保持一致
// function join(first: string | number, second: string | number) {
//   return `${first}${second}`;
// }
// console.log(join("jspang", ".com"))

// function join<String>(first: String, second: String) {
//   return `${first}${second}`;
// }
// console.log(join<string>("jspang", ".com"))

// 泛型中数组的使用
// function myFun<ANY>(params: ANY[]) {
//   return params;
// }
// console.log(myFun<string>(["123", "456"]))

// function myFun<ANY>(params: Array<ANY>) {
//   return params;
// }
// console.log(myFun<string>(["123", "456"]))

// 多个泛型的定义
// function join<S, N>(first: S, second: N) {
//   return `${first}${second}`;
// }
// console.log(join<string, number>('hello', 2))

// 泛型的类型推断
// function join<T, P>(first: T, second: P) {
//   return `${first}${second}`;
// }
// console.log(join(1, "2"))

// 基本类
// class SelectGirl {
//   constructor(private girls: string[]) {}

//   getGirl(index: number) {
//     return this.girls[index]
//   }
// }
// const girls: string[] = ['xiaohong', 'xiaolan']
// const selectGirl1 = new SelectGirl(girls)
// console.log(selectGirl1.getGirl(1))

// 泛型改造基本类
// class SelectGirl<T> {
//   constructor(private girls: T[]) {}

//   getGirl(index: number): T {
//     return this.girls[index]
//   }
// }
// const girls: string[] = ['xiaohong', 'xiaolan']
// const selectGirl1 = new SelectGirl<string>(girls)
// console.log(selectGirl1.getGirl(1))

// 泛型约束 string || number
// class SelectGirl<T extends string | number> {
//   constructor(private girls: T[]) {}

//   getGirl(index: number): T {
//     return this.girls[index]
//   }
// }
// const girls: number[] = [1, 2]
// const selectGirl1 = new SelectGirl<number>(girls)
// console.log(selectGirl1.getGirl(1))

// 泛型中的继承
// interface Girl {
//   name: string
// }
// class SelectGirl<T extends Girl> {
//   constructor(private girls: T[]) {}

//   getGirl(index: number): string {
//     return this.girls[index].name
//   }
// }
// const girls = [{name: 'xiaohong'}, {name: 'xiaolan'}]
// const selectGirl1 = new SelectGirl(girls)
// console.log(selectGirl1.getGirl(0))

