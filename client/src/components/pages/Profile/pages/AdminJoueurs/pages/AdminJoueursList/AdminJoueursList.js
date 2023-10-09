import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./AdminJoueursList.module.scss";

function AdminJoueursList() {
  const [joueurs, setJoueurs] = useState([]);

  useEffect(() => {
    // Effectue une requête GET à l'API pour récupérer la liste des joueurs
    axios
      .get("/api/joueurs")
      .then((response) => {
        setJoueurs(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des joueurs :", error);
      });
  }, []);

  const handleDelete = async (joueurId) => {
    try {
      // Effectue une requête DELETE à l'API pour supprimer le joueur
      await axios.delete(`/api/joueurs/${joueurId}`);

      // Met à jour la liste des joueurs après la suppression
      setJoueurs((prevJoueurs) =>
        prevJoueurs.filter((joueur) => joueur._id !== joueurId)
      );
    } catch (error) {
      console.error("Erreur lors de la suppression du joueur :", error);
    }
  };

  return (
    <div>
      <div className={styles.playerListTitle}>
        <h2>Liste des joueurs</h2>
      </div>
      <div className={styles.registeredPlayerListWrapper}>
        {joueurs.map((joueur) => (
          <div
            key={joueur._id}
            className={styles.registeredPlayerListContainer}
          >
            <div className={styles.registeredPlayerIdentityWrapper}>
              <div
                className={styles.registeredPlayerListPhotoWrapper}
                style={{ backgroundImage: `url(${joueur.photo})` }}
              ></div>
              <div className={styles.registeredPlayerFullName}>
                <p>
                  {joueur.lastname} {joueur.firstname}
                </p>
              </div>
            </div>
            <div className={styles.registeredPlayerInfosWrapper}>
              <div className={styles.registeredPlayerCurrentClub}>
                <p>{joueur.currentClub}</p>
              </div>
              <div className={styles.registeredPlayerCurrentClubLogo}>
                <img
                  src={joueur.currentClubLogo}
                  alt={`${joueur.currentClub} Logo`}
                />
              </div>
            </div>
            <div className={styles.registeredPlayerCRUD}>
              <button className={styles.registeredPlayerUpdate}>
                Modifier
              </button>
              <button
                className={styles.registeredPlayerDelete}
                onClick={() => handleDelete(joueur._id)}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminJoueursList;
