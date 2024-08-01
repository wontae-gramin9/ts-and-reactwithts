import { useUser } from "./context/UserContext";

export default function User() {
  const { user, setUser } = useUser();
  function handleLogin() {
    setUser({
      name: "wontae",
      email: "wontae@gmail.com",
    });
  }
  function handleLogout() {
    setUser(null);
  }
  return (
    <div>
      <button onClick={handleLogin}></button>
      <button onClick={handleLogout}></button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
}
