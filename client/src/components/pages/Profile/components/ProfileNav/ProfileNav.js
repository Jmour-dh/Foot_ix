import React from "react";
import styles from "./ProfileNav.module.scss";
import { NavLink } from "react-router-dom";

function ProfileNav() {
  return (
    <ul className={`${styles.list} d-flex flex-column`}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="players"
      >
        Joueurs
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="admins"
      >
        Admins
      </NavLink>
    </ul>
  );
}

export default ProfileNav;
