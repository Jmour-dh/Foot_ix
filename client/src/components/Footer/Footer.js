import React from "react";
import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerFlex}>
        <ul>
          <li>
            <NavLink to="/joueurs">A PROPOS</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACTEZ-NOUS</NavLink>
          </li>
          <li>
            <NavLink to="/projet">PROJETS EN COURS</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
