import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  //   const error = useRouteError();

  return (
    <div>
      <Navbar />
      <h1>Error Page</h1>
      <Footer />
    </div>
  );
};

export default ErrorPage;
