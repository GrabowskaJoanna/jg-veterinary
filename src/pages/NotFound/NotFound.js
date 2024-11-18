import React from "react";
import TopBar from "../../abstract/TopBar";
import Footer from "../../abstract/Footer";

const NotFound = () => {
  return (
    <>
      <TopBar />
      <p className="not_found">
        404 <br /> Nothing is here
      </p>
      <Footer />
    </>
  );
};

export default NotFound;
