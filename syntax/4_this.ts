interface User {
  name: string;
  age: number;
}

const sam: User = { name: "Sam", age: 19 };

function showName(
  // 이 부분이 this의 타입을 강제하는 TypeScript
  this: User,
  age: number,
  gender: "m" | "f"
) {
  console.log(this.name, age, gender);
}

const showSam = showName.bind(sam);
showSam(30, "m");

// OVERLOADING
function isValidUser(name: string, age: number): User;
function isValidUser(name: string, age: string): string;
// OVERLOADING
function isValidUser(name: string, age: number | string): User | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "Age must be number";
  }
}

// 에러 발생(오버로딩이 없다면)
// isValidUser의 분기문 때문에
// User객체를 반환할지 string을 반환할지 확신이 없기 때문임
// 매개변수의 개수나 타입에 따라서 다르게 동작하는 함수이기 때문이다.
// 이럴때는 오버로딩을 쓰면 된다
const wontae: User = isValidUser("Wontae", 30);
const jane: string = isValidUser("Jane", "26");
