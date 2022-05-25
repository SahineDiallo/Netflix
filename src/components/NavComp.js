import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";

import "./NavCss.css";
const NavComp = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar collapseOnSelect fixed="top" bg="dark" expand="md" variant="dark">
      <Navbar.Brand href="/">
        <img
          src="https://www.picng.com/upload/netflix/png_netflix_64664.png"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <a href="">Home</a>
          <a href="">Movies</a>
          <a href="">Series</a>
          <a href="">Features</a>
        </Nav>
      </Navbar.Collapse>
      <div className="d-flex search_area align-items-center">
        <input
          class="form-control"
          type="search"
          placeholder="Search a movies, a serie...."
          aria-label="Search"
        />
        <SearchIcon className="search__icon" />
      </div>
    </Navbar>
  );
};

export default NavComp;
