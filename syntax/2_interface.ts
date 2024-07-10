let user: object;

// object는 모든 reference타입의 부모이기에 의미가 없다
// reference(non-primitive) type

// plain object
user = {
  name: "xx",
  age: 30,
};
// array
user = [1];
// function
user = () => {};
// Instance of class
class User2 {}
user = new User2();

// Primitive types like string, number, boolean, symbol, null, undefined
// are not assignable to object
// 그래서 object로만 했을 때는 user.name은 의미가 없다.

type Grade = "A" | "B" | "C";

interface Person {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  // Index signatures(≒ computed property without typing)
  // key의 타입은 string, number, Symbol만 가능하다
  [grade: number]: string;
  // Literal type을 사용하고 싶다면 아래처럼
  grades: {
    [key in Grade]: string;
  };
}

let person: Person = {
  name: "asd",
  age: 30,
  birthYear: 1994,
  1: "1",
  grades: {
    A: "A",
    B: "B",
    C: "C",
  },
};
// person.birthYear = 10 에러, 수정불가

// INTERFACE로 함수 INTERFACE 만들기
interface Add {
  (num1: number, num2: number): number;
}
const add2: Add = function (x, y) {
  return x + y;
};
console.log(add2(10, 20));
interface IsAdult {
  (age: number): boolean;
}
const a: IsAdult = (age) => age > 19;

// INTERFACE로 클래스 만들기
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start(): void {
    console.log("go...");
  }
}

const b = new Bmw("green");
console.log(b);

// INTERFACE 확장(EXTENSION)
interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  door: 5,
  start() {},
  stop() {},
  color: "red",
  wheels: 4,
};

// 다중 확장
interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}
