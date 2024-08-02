import React, { useEffect, useRef } from "react";

export default function DomRef() {
  // 1. html tag에 따라 제너릭에 넣을 타입이 다르다
  // 2. 절대로 null일 경우가 없다고 생각하면(대부분의 경우이지)
  // null!로 optional chaining을 없앨 수 있다
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    // useRef에 제너릭을 넣어주지 않으면
    // inputRef?.current?.focus()으로 optional chaining을 해도 never에 focus()는 없다는
    // 에러발생. reference type과 관련있다?
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}
