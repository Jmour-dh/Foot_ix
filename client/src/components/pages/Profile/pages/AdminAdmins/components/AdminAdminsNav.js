import React from 'react'
import styles from "./AdminAdminsNav.module.scss"
import { NavLink } from "react-router-dom";

function AdminAdminsNav () {
  return (
    <div>
       <ul className={styles.list}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="listAdmins"
      >
        Liste des admins
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="newAdmin"
      >
        Ajouter un admin
      </NavLink>
    </ul>
    </div>
  )
}

export default AdminAdminsNav
