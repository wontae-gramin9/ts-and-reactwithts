// 클래스, 함수, 인터페이스를 재사용할 수 있음
function getSize<
  // Type Parameter: 타입을 전달받아 함수에서 변수로 사용할 수 있음
  T
>(arr: T[]): number {
  return arr.length;
}
const arr81 = [1, 2, 3];
getSize<number>(arr81);
const arr82 = ["1", "2", "3"];
getSize<string>(arr82);
const arr83 = [false, true, true];
getSize<boolean>(arr83);
const arr84 = [{}, {}, { name: "Tim" }];
getSize<object>(arr84);

interface Phone<T> {
  name: string;
  price: number;
  option: T;
}

interface Samsung extends Phone<{ color: string }> {
  as: boolean;
}

const p1: Phone<{ color: string }> = {
  name: "s21",
  price: 840000,
  option: {
    color: "red",
  },
};

const p1WithAs: Samsung = {
  name: "s24",
  price: 1240000,
  as: true,
  option: {
    color: "red",
  },
};

const p2: Phone<string> = {
  name: "redmi",
  price: 340000,
  option: "good",
};

function tellAS<T extends { as: boolean }>(data: T): boolean {
  // as prop이 없는 data를 대비해 Generic
  return data.as;
}
tellAS(p1WithAs);
// tellAS(p1); // 이건 as가 없으니 에러가 발생
