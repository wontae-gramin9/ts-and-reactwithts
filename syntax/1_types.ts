// 기본타입
let car: string = "bmw";
let isAdult: boolean = true;
let age = 30; // Type Inference
const add1 = (num1: number, num2: number) => num1 + num2;

let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// 튜플
let b1: [string, number];
b1 = ["z", 1];
b1[0].toLowerCase();

// void
// return값 없음(return문 없음)
function showItems(items: string[]): void {
  items.forEach((item) => {
    console.log(item);
  });
}

// never
// 에러를 반환하거나, 영원히 끝나지 않는 무한루프
function showError(): void {
  throw new Error();
}
function infLoop(): never {
  while (true) {}
}

// enum
// JS에는 없는 타입
enum Os {
  Window = 3,
  Ios, // 4
  Android = 6, // 5
  Linux, // 11
}
// enum은 양방향 매핑이 되어있다
console.log(Os["Ios"]); // 4
console.log(Os[4]); // Ios

let myOs: Os;

// null, undefined
let c: null = null;
let d: undefined = undefined;
