import React from "react";

type CustomButtonProps = {
  variant: "primary" | "secondary";

  // html의 button tag는 onclick을 가지고 있지?
  // (물론 사실JSX이기 때문에 onClick으로 가지고 있지만)
  // 그런 html의 prop을 일일히 Typescript props에 주지 않고,
  // extension처럼 받아올수 있는 방법

  // 만약 button의 children으로 string만 오게하고싶다면?
  // React.ReactNode → string overriding
  children: string; // 이렇게 하면 string & React.ReactNode이 된다. 예약어라서 그렇겠지
  // React.ReactNode을 아예 제외하고싶다면? Omit 사용
  // 커스텀컴포넌트를 만들 때 제약에 좋을 듯
} & Omit<React.ComponentProps<"button">, "children">;

export default function CustomButton({
  variant,
  children,
  ...rest // destructing으로 props의 남은 prop을 한 번에!
}: CustomButtonProps) {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
}
