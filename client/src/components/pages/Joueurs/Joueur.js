import styles from './Joueurs.module.scss'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Joueur = () => {
  const { id } = useParams();
  const [joueur, setJoueur] = useState(null);
  
  console.log(id)
  useEffect(() => {
    axios.get(`/api/joueurs/${id}`)
      .then((response) => {
        setJoueur(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des détails du joueur :", error);
      });
  }, [id]);

  if (!joueur) {
    return <div>Aucun joueur ne correspond à votre recherche</div>;
  }

  

  return (
    <>
      <div className={styles.playerBanner}>
        <div className={styles.playerBannerNameContainer}>
          <p className={styles.playerBannerLastname}>{joueur.lastname}</p>
          <p className={styles.playerBannerFirstname}>{joueur.firstname}</p>
        </div>
        
        <img src={joueur.photo} className={styles.playerBannerImage}/>
      </div>
      <div className={styles.playerInformations} >
        <div className={styles.playerInformationsPhoto}>
          <p className={styles.playerInformationsPhotoNumber}>{joueur.jerseyNumber}</p>
          <img src={joueur.profilePhoto} className={styles.playerInformationsPhotoProfile}/>
        </div>
        <div className={styles.playerInformationsText}>
          <h2>{joueur.lastname} {joueur.firstname}</h2>
          <div className={styles.playerInformationsTextFlex}>
            <div className={styles.playerInformationsTextSpecifics}>
              <p>Age:</p>
              <p>Nationalité:</p>
              <p>Taille:</p>
              <p>Club:</p>
              <p>Position:</p>
              <p>Apparences:</p>
              {joueur.position === "Gardien de but" &&
                <>
                  <p>But concédés:</p>
                  <p>Clean sheets:</p>   
                </>        
              }
              {joueur.position !== "Gardien de but" &&
                <>
                  <p>Buts:</p>
                  <p>Passes décisives:</p>
                </>
              }
            </div>
            <div className={styles.playerInformationsTextProfile}>
              <p>{joueur.age}</p>
              <p>{joueur.country}</p>
              <p>{joueur.height}m</p>
              <p>{joueur.currentClub}</p>
              <p>{joueur.position}</p>
              <p>{joueur.appearancesForCurrentClub}</p>
              {joueur.position === "Gardien de but" &&
                <>
                  <p>{joueur.goalsConcededForCurrentClub}</p>
                  <p>{joueur.cleanSheetsForCurrentClub}</p>   
                </>        
              }
              {joueur.position !== "Gardien de but" &&
                <>
                  <p>{joueur.age}</p>
                  <p>{joueur.age}</p>
                </>
              }
            </div>
          
          </div>
          
        </div>
      </div>
    </>
      
  );
};

export default Joueur;