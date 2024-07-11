// 기존의 Literal Type을 기반으로 새로운 타입을 만드는 것
type Toss = "toss";
// type TossPayments = 'toss payments';
type TossPayments = `${Toss} payments`;

// Union Type과 합치면 결과물도 Union Type이 된다
type Companies = "core" | "bank" | "securities" | "payments" | "insurance";
// type TossCompanies = 'toss core' | 'toss bank' | 'toss securities' | ...;
type TossCompanies = `${Toss} ${Companies}`;

// 3x3 곱의법칙
type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

// type Alignment =
//   | "top-left"    | "top-center"    | "top-right"
//   | "middle-left" | "middle-center" | "middle-right"
//   | "bottom-left" | "bottom-center" | "bottom-right"
type Alignment = `${VerticalAlignment}-${HorizontalAlignment}`;

// 1. 반복되는 타입 정의 없애기 with 이벤트핸들러
type EventNames = "click" | "doubleClick" | "mouseDown" | "mouseUp";

// * 반복되는 경우
// type MyElement = {
//   addEventListener(eventName: EventNames, handler: (e: Event) => void): void;
//   // 만약 element의 onevent에 직접 변수를 할당하거나
//   // addEventListener를 둘 다 쓸 생각이라면 EventNames에 새로운 이벤트가 추가될 때마다
//   // onEvent() 도 하나씩 추가해줘야 한다.
//   onClick(e: Event): void;
//   onDoubleClick(e: Event): void;
//   onMouseDown(e: Event): void;
//   onMouseUp(e: Event): void;
// };

// TemplateLiteralType으로 한 곳만 수정해도 모두에 반영되게 할 수 있다.
type CapitalizedEventNames = Capitalize<EventNames>; // 첫글자를 대문자화
type HandlerNames = `on${CapitalizedEventNames}`;

type Handlers = {
  // index signiture
  [H in HandlerNames]: (e: Event) => void;
};

type MyElement = Handlers & {
  addEventListener: (
    eventName: EventNames,
    handler: (e: Event) => void
  ) => void;
};
// 이제 EventNames에만 추가해주면 MyElement에 자동으로 추가된다.

// Conditional Type과 함께 더 강력한 추론하기
// 삼항연산자와 비슷하게 분기를 타면서 타입을 추론하는 방법
// infer는 Conditional Type과 함께 쓰이는데,
// 조건식이 참일때 U를 사용할 수 있다.

// 1. 제네릭 타입 인자 꺼내오기
type PromiseType<T> = T extends Promise<infer U> ? U : never;

type A = PromiseType<Promise<number>>;
// U becomes number, hence type A = number
type B = PromiseType<Promise<string | boolean>>;
// type B = string | boolean
type C = PromiseType<number>;
// number extends Promise<infer U> ? number : never
// U에 어떤 타입이 와도 number가 extends할 수 없으므로 infer U false, hence never

// 2. 튜플 다루기
// [string, number, boolean] 에서 [number, boolean], 즉 [1:]을 가져오고 싶다면?
type TailOf<T> = T extends [unknown, ...infer U] ? U : [];
type Tail = TailOf<[string, number, boolean]>;
// 첫 요소를 제외하고 ...infer U(destructuring)으로 뒤 요소를 모두 선택함.

// 특정 튜플이 비어있는지 검사하기
type IsEmpty<T extends any[]> = T extends [] ? true : false;
type Empty = IsEmpty<[]>;

type NotEmptpy = IsEmpty<[number, string]>;

// Conditional Type + Template Literal Type
// fadeIn, fadeOut에서 fade접두사를 버리고 In, Out만 가져오고 싶을 때
type InOrOut<T> = T extends `fade${infer R}` ? R : never;
type I = InOrOut<"fadeIn">; // 'In'
type O = InOrOut<"fadeOut">; // 'Out'

// 문자열에서 공백 없애기(TrimRight 선언)
// 재귀함수
type TrimRight<T extends string> = T extends `${infer R} ` ? TrimRight<R> : T;
type T = TrimRight<"Toss         ">; // "Toss"

// 점으로 연결된 문자열 split하기
type Split<S extends string> = S extends `${infer T}.${infer U}`
  ? [T, ...Split<U>]
  : [S];

type S = Split<"foo.bar.baz">;
// ['foo', ...Split<'bar.baz'>]
// ['foo', 'bar', ...Split<'baz'>]
// ['foo', 'bar', 'baz']
