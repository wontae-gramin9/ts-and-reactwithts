// keyof: interface의 key값들을 union형태로 리턴
interface Sns {
  id: number;
  name: string;
  since: number;
}

type SnsKey = keyof Sns; // 'id' | 'name' | 'since'

// partial: prop를 모두 optional하게 바꿈
let insta: Partial<Sns> = {
  id: 1,
  name: "insta",
};

// Required: 반대로 prop를 모두 필수로 바꿈
// Readonly: prop를 모두 readonly로 바꿈

// Recode<Key, Type>
interface Score {
  "1": "A" | "B" | "C";
  "2": "A" | "B" | "C";
  "3": "A" | "B" | "C";
  "4": "A" | "B" | "C";
}
// 이렇게 hideous한 interface를 만들기 보다
type Grade2 = "1" | "2" | "3" | "4";
type Score2 = "A" | "B" | "C";

const score: Record<
  Grade2,
  Score2
  // "1" | "2" | "3" | "4", "A" | "B" | "C"
> = {
  1: "A",
  2: "C",
  3: "B",
  4: "A",
};

function isValidSns(sns: Sns) {
  const result: Record<keyof Sns, boolean> = {
    id: sns.id > 0,
    name: sns.name !== "",
    since: sns.since > 0,
  };
  return result;
}
// Pick<Type, Key>
// Type의 특정 Key만 뽑아 쓰는 법
const fb: Pick<Sns, "id" | "since"> = {
  id: 0,
  since: 1998,
};
// Omit<Type, Key>
// Type의 특정 Key를 생략하는 방법

// Exclude<Type1, Type2>
// Type1에서 Type2의 Key를 제외하고 사용하는 방법

// NonNullable<Type>
// null과 undefined를 제외한 타입을 생성
type T1 = string | null | undefined | void;
type T2 = NonNullable<T1>;
