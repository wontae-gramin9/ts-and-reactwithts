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
// 위 모든 타입이 전부 Object에 들어간다는 것

// Primitive types like string, number, boolean, symbol, null, undefined
// are not assignable to object
// 그래서 object로만 했을 때는 user.name은 의미가 없다.

type Grade = "A" | "B" | "C";

// *** TYPE VS INTERFACE
// 솔직히 말하면, 팀바팀이라 둘이 큰 차이는 없다
// TypeScript에서의 Interface는 어떤 역할을 하는가?를 먼저 묻자
// → object가 따라야만 하는 규칙 or 요구사항의 집합
// 그니까 차이점 1: Interface는 primitive type을 정의할 수 없다.
// 객체지향에서 쓰는 것들 대부분 쓸 수 있다고 생각하면 된다.
// 그래서 뭔가 기존의 구조를 상속받아서 확장하고 싶을때, 제약이 많은 type보다
// interface를 쓸 수 있다.

// 대신 Type은 generic, type guard, conditional type 등의 심화된 도구를 제공한다
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
