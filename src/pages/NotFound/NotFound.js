import React from "react";
import NavBar from "../../abstract/NavBar";
import Footer from "../../abstract/Footer";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <p className="not_found">
        404 <br /> Nothing is here
      </p>
      <Footer />
    </>
  );
};

export default NotFound;
