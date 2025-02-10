// 5_1_templateLiteralType에서 잠깐 다룬 Conditional types
// 조건부 타입: 입력된 제네릭 타입에 따라 타입을 결정할 수 있음
// T extends U ? X : Y
// 삼항연산자가 떠오를 텐데, 조건부 타입은 조건에 따라 값을 결정하는게 아니라
// 타입을 조건에 따라 결정하는 것이다
// "T가 U에 할당될 수 있으면 타입은 X가 되고 그렇지 않다면 타입이 Y가 된다"

// Generic에서 extends 키워드를 쓰려면 괄호 <>에 써야하는데,
// 조건부타입도 하나의 타입이기에 별개의 타입 문법이라고 생각해야한다

// 제네릭 extends 와 조건부 타입 extends는 역할만 같은 서로 다른 사용처 연산자라고 생각하라

// Ex
type IsStringType<T> = T extends string ? string[] : number[];
// 제네릭 T가 문자열이면, IsStringType는 string[] 아니면 number[]

type Ty1 = IsStringType<string>;
type Ty2 = IsStringType<number>;

const a501: Ty1 = ["홍길동", "임혁"];
const b501: Ty2 = [1, 2, 3];
console.log(a501, b501);

// <> 안의 T는 제네릭, boolean type으로 제한
interface IsDataString<T extends boolean> {
  // 여기서 T는 조건부타입
  data: T extends true ? string : number;
  isString: T;
}

const str501: IsDataString<true> = {
  data: "헤",
  isString: true,
};

const num501: IsDataString<false> = {
  data: 9999,
  isString: false,
};

// 분산 조건부 타입 Distributive Conditional Types이라는게 있어서
// Union타입을 제네릭의 T에 할당하면 코드가 이해하기 어려워진다.
// 쓰지 마라
