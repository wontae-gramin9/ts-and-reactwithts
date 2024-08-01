import { createContext, useContext, useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextValueType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

// Unknown initial state일 때
// 유저가 아직 로그인하지 않았을 때를 상정
const UserContext = createContext({} as UserContextValueType);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  // 컴포넌트니까 당연히 useState사용 가능
  const [user, setUser] = useState<AuthUser | null>(null);

  // 1. initial state를 null로 했으니, TS는 Provider의 value도 null일줄 알아서 에러 발생
  // 그런데 value에는 object에 prop, method(even setter)도 담아서 리턴할 수 있다.
  // 따라서 value의 타입 UserContextValueType를 따로 만들어서 createContext에 준다.
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside the CityProvider");
  return context;
}

export { UserContextProvider, useUser };
