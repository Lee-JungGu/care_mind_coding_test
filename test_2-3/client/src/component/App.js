import React from "react";
import { HashRouter, Route } from "react-router-dom";
import LoginPage from "./Views/LoginPage/LoginPage";
import MyPage from "./Views/MyPage/MyPage";
import RegisterPage from "./Views/RegisterPage/RegisterPage";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/mypage" component={MyPage} />
      <Route exact path="/register" component={RegisterPage} />
    </HashRouter>
  );
}

export default App;
