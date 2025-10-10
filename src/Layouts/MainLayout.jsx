import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import { NavLink } from "react-router";

const MainLayout = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/products" className="hover:underline">
          Products
        </NavLink>
      </li>

      <li>
        <NavLink to="/wish-list" className="hover:underline">
          Wish List
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={links}></Navbar>
      <div className="max-w-screen-2xl mx-auto w-full p-4 md:p-8 lg:p-12 flex-1">
        <Outlet />
      </div>
      <Footer links={links}></Footer>
    </div>
  );
};

export default MainLayout;
