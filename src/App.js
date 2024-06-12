import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/login/LoginForm";
import VisitList from "./pages/visitList/VisitList";
import Registration from "./pages/newRegistrationForm/Registration";
import NotFound from "./pages/NotFound/NotFound";
import { Provider } from "react-redux";
import store from "./pages/store/store";
import Modal from "./abstract/modal";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/visitList"
            element={<VisitList setIsVisible={setIsVisible} />}
          />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </HashRouter>
      <Modal show={isVisible} setIsVisible={setIsVisible} />
    </Provider>
  );
};

export default App;
