import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useUser from "./context/useUserContext";
import { UserContext } from "./context/UserContext";

function App() {
  const { user, setUser, isLoggedIn } = useUser();
  return (
    <UserContext.Provider value={useUser()}>
      <h1> Hello</h1>
    </UserContext.Provider>
  );
}

export default App;
