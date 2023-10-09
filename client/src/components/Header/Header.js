import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../components/context";
import { useContext } from "react";

function Header() {
  const location = useLocation();
  const { user, signout } = useContext(AuthContext);
  const getHeaderClassName = () => {
    if (location.pathname === "/signin") {
      return styles.headerCnx; // Apply different styles for the "Profile" page
    } else {
      return styles.headerDefault; // Apply default styles for other pages
    }
  };

  return (
    <>
      {user ? (
        <header className={getHeaderClassName()}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li>
              <NavLink onClick={() => signout()}>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </NavLink>
            </li>
          </ul>
        </header>
      ) : (
        <header className={getHeaderClassName()}>
          <div className={styles.logo}>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>

          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to="/joueurs"
              >
                Joueurs
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to="/clubs"
              >
                Clubs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to="/stades"
              >
                Stades
              </NavLink>
            </li>
          </ul>
          <div>
            <NavLink
              className={({ isActive }) => (isActive ? "Linkactive" : "")}
              to="/signin"
            >
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
