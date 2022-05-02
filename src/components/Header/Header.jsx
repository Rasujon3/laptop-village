import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Sujon Ware House
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* {user && ( */}

              <li className="nav-item">
                <CustomLink className="nav-link" aria-current="page" to="/">
                  My items
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink
                  className="nav-link"
                  aria-current="page"
                  to="/manageinventory"
                >
                  Manage Inventories
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link" aria-current="page" to="/">
                  Add Item
                </CustomLink>
              </li>

              {/* )} */}
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <CustomLink
                    className="nav-link"
                    aria-current="page"
                    to="/blogs"
                  >
                    Blogs
                  </CustomLink>
                </li>

                {user ? (
                  <li className="nav-item">
                    <Link
                      onClick={() => signOut(auth)}
                      className="nav-link"
                      to="/login"
                    >
                      Sign Out
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <CustomLink className="nav-link" to="/login">
                      Sign In
                    </CustomLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
