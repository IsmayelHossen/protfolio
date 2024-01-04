import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Header(params) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const navbar = localStorage.getItem("LoginSuccess");
  const LoginData = JSON.parse(localStorage.getItem("AuthData"));

  const Logout = () => {
    localStorage.removeItem("AuthData");
    localStorage.removeItem("LoginSuccess");

    window.location.href = "/";
  };
  return (
    <>
      <div className="App">
        <nav
          id={
            location.pathname == "/login"
              ? "hideNavForLogin"
              : location.pathname == "/registration"
              ? "hideNavForLogin"
              : ""
          }
          class="navbar navbar-expand-lg navbar-light bg-light"
        >
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">
              IHOSSEN
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    id={location.pathname == "/about" ? "ActiveLink" : ""}
                    to="/about"
                    class="nav-link"
                  >
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    id={location.pathname == "/contact" ? "ActiveLink" : ""}
                    to="/contact"
                    class="nav-link"
                  >
                    Contact
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    id={location.pathname == "/blog" ? "ActiveLink" : ""}
                    to="/blog"
                    class="nav-link"
                  >
                    Works
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    id={location.pathname == "/service" ? "ActiveLink" : ""}
                    to="/service"
                    class="nav-link"
                  >
                    Services
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  style={{ textTransform: "uppercase" }}
                />
              </form>
              <ul class="navbar-nav  mb-2 mb-lg-0 frontendloginreg"></ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header;
