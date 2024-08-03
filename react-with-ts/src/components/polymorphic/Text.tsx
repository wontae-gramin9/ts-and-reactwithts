// 커스텀 컴포넌트같이 디자인 시스템을 만들거나, 컴포넌트 라이브러리를 만들 때 사용
import React from "react";

type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  // name collision
  // React.ElementType의 prop과 충돌할 가능성 있음
  // Omit으로 빼준다
  children?: React.ReactNode;
  // as?: React.ElementType;
  // 이러면 as에 아직 제약이 없으므로(어떤 html tag도 가능), 만약 제약을 주고싶다면
  // E Generic을 주고, E를 상속시켜서 제한할 수 있다
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

// 밑의 기본 컴포넌트가 div로 되어있으니 기본 타입도 'div'로
export default function Text<E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) {
  // return <div className={`class-with-${size}-${color}`}>{children}</div>;
  // div로 해놓고 css(className)으로 크기를 조절하면 simantic에 맞지 않는다(SEO문제)
  // 따라서 html tag의 종류를 prop으로 받겠다는 것

  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
}
