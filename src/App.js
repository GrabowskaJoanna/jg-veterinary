import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/login/LoginForm";
import VisitList from "./pages/visitList/VisitList";
import Registration from "./pages/newRegistrationForm/Registration";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./abstract/autorisation/PrivateRoute";
import PrivateRouter from "./abstract/autorisation/PrivateRoute";
import { Provider } from "react-redux";
import store from "./pages/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/visitList" element={<VisitList />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
};

export default App;
