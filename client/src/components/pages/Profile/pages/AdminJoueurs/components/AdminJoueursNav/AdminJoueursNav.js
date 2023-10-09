import React from "react";
import styles from "./AdminJoueursNav.module.scss";
import { NavLink } from "react-router-dom";

function AdminJoueursNav() {
  return (
    <ul className={styles.list}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="list"
      >
        Liste des joueurs
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="new"
      >
        Ajouter un joueur
      </NavLink>
    </ul>
  );
}

export default AdminJoueursNav;
