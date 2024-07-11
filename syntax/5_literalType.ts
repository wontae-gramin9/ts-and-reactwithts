// const변수는 다른 값으로 변할 수 없으니 "Bob"문자열 자체가 타입 infer
// STRING LITERALS
const userName1 = "Bob";
// let변수는 언제든 다른 값으로 변할 수 있으니 string으로 infer
let userName2 = "Tom";

type Job = "police" | "developer" | "teacher";

interface Guy {
  name: string;
  job: Job;
}

// Literal type에는 string, number ,boolean이 가능하다
interface HighSchoolStudents {
  name: string;
  grade: 1 | 2 | 3;
}
