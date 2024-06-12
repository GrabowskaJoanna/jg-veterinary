// import React, { useEffect } from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import VisitList from "../../pages/visitList/VisitList";
// import Registration from "../../pages/newRegistrationForm/Registration";
//
// const PrivateRouter = () => {
//   const location = useLocation();
//
//   useEffect(() => {
//     if (!localStorage.token) {
//       window.location.href = "/";
//     }
//   }, [location]);
//   return localStorage.token ? (
//     <Routes>
//       <Route path="/visitList" element={<VisitList />} />
//       <Route path="/registration" element={<Registration />} />
//     </Routes>
//   ) : (
//     <Navigate to="/" />
//   );
// };
//
// export default PrivateRouter;
