import React from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  // Component가 무슨 prop을 받을지 ts는 알지 못한다.
  // 그러므로 후보가 될 컴포넌트의 propType을 제너릭으로 넣어준다
  component: React.ComponentType<ProfileProps>;
};

export default function Private({
  isLoggedIn,
  component: Component,
}: PrivateProps) {
  return isLoggedIn ? <Component name="wontae" /> : <Login />;
}
