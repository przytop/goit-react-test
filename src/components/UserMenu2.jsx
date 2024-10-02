import { useUser } from "./userContext";

export const UserMenu2 = () => {
  const { isLoggedIn, username, logOut, logIn } = useUser();

  return (
    <div>
      <h1>User Menu</h1>
      {isLoggedIn ? (
        <>
          <p>Logged in: {username}</p>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
};
