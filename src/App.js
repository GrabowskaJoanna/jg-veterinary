import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/login/LoginForm";
import VisitList from "./pages/visitList/VisitList";
import Registration from "./pages/newRegistrationForm/Registration";
import NotFound from "./pages/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./abstract/modal";
import { hideModal } from "./pages/store/modalSlice";

const App = () => {
  const isVisible = useSelector((state) => state.modal.isVisible);
  const row = useSelector((state) => state.modal.row);
  const deleteItem = useSelector((state) => state.list.items);
  const dispatch = useDispatch();

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/visitList" element={<VisitList />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </HashRouter>
      <Modal
        show={isVisible}
        setIsVisible={() => dispatch(hideModal())}
        row={row}
      />
    </>
  );
};

export default App;
