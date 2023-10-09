import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './AdminJoueursList.module.scss'

function AdminJoueursList() {
  const [joueurs, setJoueurs] = useState([]);
  useEffect(() => {
    // Effectue une requête GET à l'API pour récupérer la liste des contacts
    axios
      .get("/api/joueurs")
      .then((response) => {
        setJoueurs(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des users :", error);
      });
  }, []);
  return (
    <div>
      <div className={styles.playerListTitle}>
        <h2>Liste des joueurs</h2>
      </div>
      <div className={styles.registeredPlayerListWrapper}>
        {joueurs.map((joueur) => (
          <div className={styles.registeredPlayerListContainer}>
            <div className={styles.registeredPlayerIdentityWrapper}>
              <div key={joueur.id} className={styles.registeredPlayerListPhotoWrapper} style={{backgroundImage: `url(${joueur.photo})`}}>
              </div>
              <div key={joueur.id} className={styles.registeredPlayerFullName}>
                <p>{joueur.lastname} {joueur.firstname}</p>
              </div>
            </div>
            <div className={styles.registeredPlayerInfosWrapper}>
              <div key={joueur.id} className={styles.registeredPlayerCurrentClub}>
                <p>{joueur.currentClub}</p>
              </div>
              <div key={joueur.id} className={styles.registeredPlayerCurrentClubLogo}>
                <img src={joueur.currentClubLogo}/>
              </div>
            </div>
            <div className={styles.registeredPlayerDelete}>
              <button>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminJoueursList;
