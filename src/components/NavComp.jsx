import { useState } from "react";
import "./Components.css";
import { Link } from "react-scroll";

const NavComp = () => {
  const navArr = ["Portfolio", "Achievement", "Bio", "Gallery", "Contact"];
  const [isActiveNav, setIsActiveNav] = useState("hi");
  const handleNav = (inp) => {
    setIsActiveNav(inp);
    console.log(isActiveNav);
  };
  return (
    <div id="navbar" className={`flex-row sp-bw navBar width-80 m-auto p-20`}>
      {navArr.map((str) => (
        <Link
          to={str.toLowerCase()}
          spy={true}
          smooth={true}
          duration={300}
          onClick={() => handleNav(str)}
          className={`m-pointer ${str === isActiveNav && "active-nav"}`}
        >
          {str}
        </Link>
      ))}
    </div>
  );
};

export default NavComp;
