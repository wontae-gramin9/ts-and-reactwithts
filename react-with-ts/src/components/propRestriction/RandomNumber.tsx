import React from "react";

// Restriction이라는것이 어떤 의미냐면
// isPositive이 true라면 isNegative와 isZero은 false여야하거나, 더 좋게는
// 아예 prop으로 주지 못하게 막야야 하는 것
// 마치 Flutter에서 color랑 container의 backgroundColor를 동시에 주지 못하게끔
// 컴파일에서 제한을 거는 방법

type RandomNumberType = {
  value: number;
  // 1. 이렇게 받을 수 있는 모든 prop을 다 넣어놓는걸 피하고
  // 공통적인 값만 가진 Type을 만든다
};

// 2. Positive, Negative, Zero에 대한 타입을 따로따로 만든다
type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  // Exhaustiveness Checking: never로 타이핑한 값에
  // 어느 값이라도 들어오면 compile 에러
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};
type Zero = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};
// 3. 이제 파생된 타입들을 UNION함

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;
export default function RandomNumber({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}
      {isZero && "zero"}
    </div>
  );
}
