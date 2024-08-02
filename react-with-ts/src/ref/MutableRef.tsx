import { useEffect, useRef, useState } from "react";

export default function MutableRef() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | undefined>(undefined);

  const stopTimer = () => {
    window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    // setInterval는 numId를 반환하기에 intervalRef.current(현재값)도 number | null로 타이핑해야함
    intervalRef.current = window.setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer - {timer}
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
}
