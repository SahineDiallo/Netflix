import React from "react";
import NavComp from "./NavComp";
import Banner from "./Banner";
import Row from "./Row";
import Movies from "./Movies.js";

const Header = () => {
  return (
    <>
      <NavComp />
      <header className="">
        <Banner />
        <Row />
      </header>
      <Movies />
    </>
  );
};

export default Header;
