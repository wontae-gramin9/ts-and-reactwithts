import React from "react";
import { Object } from "../props/Object";

// components/props/Object.tsx 컴포넌트의 propType을 똑같이 가져야 한다면?
// typeof으로 컴포넌트의 타입을 가져오면
export default function ObjectChildComponent(
  props: React.ComponentProps<typeof Object>
) {
  return (
    <div>
      <p>{props.isLoggedIn}</p>
      <p>{props.messageCount}</p>
      <p>{props.name}</p>
    </div>
  );
}
