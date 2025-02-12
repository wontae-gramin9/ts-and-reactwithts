// 유니온 타입을 만들었다고 하자, 유니온은 공통된 속성에만 접근할 수 있으므로
// 아래같이 한 타입에만 있는 prop에 접근하면 에러가 난다
interface SWE {
  name: string;
  skill: string;
}

interface Backsoo {
  name: string;
  age: number;
}

const introduce = (): SWE | Backsoo => ({
  name: "Kim",
  age: 20,
  skill: "React",
});

let kim = introduce();
console.log(kim.skill);

// 이걸 막으려고 일일히 as로 타입 단언을 해주면,
// 코드가 스파게티가 된다
if ((kim as SWE).skill) {
  let skill = (kim as SWE).skill;
  console.log(skill);
} else if ((kim as Backsoo).age) {
  let age = (kim as Backsoo).age;
  console.log(age);
}

// 타입 가드를 쓰면 조건문 안에서 타입 범위를 알아서 한정시킬 수 있다
// 1. 원시타입에는 typeof 사용 가능
const func11 = (x: number | string) => {
  if (typeof x === "string") {
    console.log(x.substring(1)); // x: string
  }
  x.toString(); // x: number | string
};

// 2. 원시타입이 아니고 클래스라면 instanceof 사용 가능
class Foo11 {
  common = "123";
  foo = 123;
}
class Bar11 {
  common = "123";
  bar = 123;
}

const func111 = (arg: Foo11 | Bar11) => {
  if (arg instanceof Foo11) {
    console.log(arg.foo);
    console.log(arg.bar);
  }

  // Foo, Bar중에 누구인지도 모르기때문에 둘 다 에러가 나는 것
  console.log(arg.foo);
  console.log(arg.bar);

  // 3. 만약에 상속이 많이 되어서 객체를 딱 하나로 집기 어렵다면
  // in으로 그 prop이 그 객체에 있는지만 확인해도 괜찮다
  if ("foo" in arg) {
    console.log(arg.foo);
  }
};

// 4. 스트링 리터럴이었다? switch문을 쓸 수도 있다 (useReducer에서 많이 쓰지?)
type State = "pending" | "fulfilled" | "rejected";
const func112 = (state: State) => {
  switch (state) {
    case "pending":
      break;
    case "fulfilled":
      break;
    case "rejected":
      break;
  }
};

// 커스텀 타입, 인터페이스 같은 내가 만든거는 typeof, instanceof를 쓰기 어렵다
// 또한
// 5. 타입판단 로직(메소드)를 재사용하고 싶다면?
// 사용자 정의 타입 가드를 쓸 수도 있다.
const isSWE = (target: SWE | Backsoo): target is SWE => {
  return (target as SWE).skill !== undefined;
};

if (isSWE(kim)) {
  kim.skill;
} else {
  kim.age;
}
