import "./App.css";
import useUser from "./context/useUserContext";
import { UserContext } from "./context/UserContext";
import MemoCallBack from './components/MemoCallBack'
import UseRefExample from "./components/UseRefExample";

function App() {
  const { user, setUser, isLoggedIn } = useUser();
  return (
    <UserContext.Provider value={useUser()}>
      {/* <MemoCallBack /> */}
      <UseRefExample />
    </UserContext.Provider>
  );
}

export default App;
