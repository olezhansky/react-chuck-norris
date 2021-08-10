import React from "react";
import Main from "./containers/Main/Main";
import Favorite from "./containers/Favorite/Favorite";
import UserContext from "./services/userContext";
import useUser from "./hooks/useUser";

function App() {
  const user = useUser();

  return (
    <div className="wrapper">
      <UserContext.Provider value={user}>
        <Main />
        <Favorite />
      </UserContext.Provider>
    </div>
  );
}

export default App;
