import { useState } from "react";
import "./Components.css";
import { Link } from "react-scroll";

const NavComp = ({ isSticky }) => {
  const navArr = ["Portfolio", "Achievement", "Bio", "Gallery", "Contact"];
  const [isActiveNav, setIsActiveNav] = useState("null");
  const handleNav = (inp) => {
    setIsActiveNav(inp);
  };
  return (
    <div id="navbar" className={isSticky ? "navbar sticky" : "navbar"}>
      <div className="navbar-content gap-5">
        {navArr.map((str) => (
          <Link
            to={str.toLowerCase()}
            spy={true}
            smooth={true}
            duration={300}
            onClick={() => handleNav(str)}
            className={`m-pointer t-smooth ${str === isActiveNav && "active-nav"}`}
          >
            {str}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavComp;
