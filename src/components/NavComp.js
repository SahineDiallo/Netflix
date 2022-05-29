import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { auth } from "../firebase/firebase";

import "./NavCss.css";
const NavComp = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [showBg, setShowBg] = useState(true);
  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("the user is signout");
    } catch (err) {
      console.log("error", err);
    }
    navigate("/login");
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setShowBg(false) : setShowBg(true);
    });
    return window.removeEventListener("scroll", setShowBg);
  }, [showBg]);
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      bg={showBg ? "transparent" : "dark"}
      expand="md"
      variant="dark"
    >
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
          <Link to="/">Home</Link>
          <Link to="/">Movies</Link>
          <Link to="/">Series</Link>
          <Link to="/">Features</Link>
        </Nav>
      </Navbar.Collapse>
      <button
        onClick={handleLogout}
        className="d-flex search_area align-items-center signout"
      >
        Sign Out
      </button>
    </Navbar>
  );
};

export default NavComp;
