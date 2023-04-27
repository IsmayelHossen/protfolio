import React from "react";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const navbar = localStorage.getItem("LoginSuccess");
  return (
    <div>
      {/* {navbar && ( */}
      <div
        class="footer"
        id={
          location.pathname == "/login"
            ? "hideNavForLogin"
            : location.pathname == "/registration"
            ? "hideNavForLogin"
            : ""
        }
      >
        <h5 className="mt-5 text-center copyright">
          <span> Design</span> & <span>Developed</span> By Ismayel
          Hossen(ShawpnobuzzBD)
        </h5>
        <p class="text-center">Protfolio@copy right 2022</p>
      </div>
      {/* )} */}
    </div>
  );
};

export default Footer;
