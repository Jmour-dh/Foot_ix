import React, { useEffect, useState } from 'react'
import styles from './Joueurs.module.scss'
import axios from 'axios'

const JoueursCard = () => {

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
    <div className={styles.playerCardWrapper}>
      {joueurs?.map((joueur) => {
        return(
          <div className={styles.playerCardElements} key={joueur.id} style={{backgroundImage: `url(${joueur.currentClubLogo})`}}>
            <div className={styles.playerCardInformations} style={{backgroundImage: `url(${joueur.photo})`}}>
              <p className={styles.jerseyNumber} style={{color: joueur.currentClubColor}}>{joueur.jerseyNumber}</p>
              <img className={styles.countryFlag} src={joueur.countryFlag}/>
            </div>
            <div className={styles.playerFullname}>
                <p className={styles.playerLastname}>{joueur.lastname}</p>
                <p className={styles.playerFirstname}>{joueur.firstname}</p> 
            </div>
          </div>
          
        )
      })
      }
    </div>
  )
}

export default JoueursCard