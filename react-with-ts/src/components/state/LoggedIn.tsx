import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // TYPE INFERENCE ON INITIAL VALUE
  // 대부분의 경우일때는 따로 Typing을 하지 않아도 된다

  // 그러나 초기값의 타입을 모르거나 미래에 정해질 때에는
  // 초기값을 null로 하는 경우가 많은데, 이떄는 초기값을 null을 inference한다
  // 그러니 generic으로 타입을 해줍니다
  // const [user, setUser] = useState<AuthUser | null>(null);

  // 만약 null일 경우가 없고 항상 AuthUser일거라고 확신한다면?
  // ex) 로그아웃 기능이 없음
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({
      name: "wontae",
      email: "wontae@gmail.com",
    });
  };

  // 로그아웃 기능이 없다면, setUser(null)도 불가
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setUser(null);
  // };

  return (
    <div>
      <button onClick={handleLogin}></button>
      {/* <button onClick={handleLogout}></button> */}
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
      {/* user의 type이 AuthUser | null이기 때문에 null값이 있을 수 있고
      알아서 optional chaining을 해준다. 안하면 에러 발생*/}
      <div>User name is {user?.name}</div>
      {/*  user의 type이 AuthUser이라면 optional chaining을 하지 않아도
      에러 발생하지 않는다. */}
      <div>User email is {user.email}</div>
    </div>
  );
}
