import React, { useContext, useState } from "react";
import { AuthContext } from "../../context";

function Projet() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>page projet</h2>
      <ul>
        <li>{user.name}</li>
        <li>{user.lName}</li>
      </ul>
    </div>
  );
}

export default Projet;
