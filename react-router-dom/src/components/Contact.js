import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Link to={"insta"}>
        <h4>Contact Via Instagram</h4>
      </Link>
      <Link to={"mail"}>
        <h4>Contact Via Mail</h4>
      </Link>
      <Outlet/>
      </>
  );
};

export default Contact;
