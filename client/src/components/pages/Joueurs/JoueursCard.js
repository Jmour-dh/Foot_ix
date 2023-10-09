import React from 'react'
import styles from './Joueurs.module.scss'

const JoueursCard = ( {joueurs} ) => {
  return (
    <div className={styles.playerCardWrapper}>
      {joueurs?.map((joueur) => {
        return(
          <div className={styles.playerCardElements} key={joueur.id} style={{backgroundImage: `url(${joueur.currentClubLogo})`}}>
            <div className={styles.playerCardInformations} style={{backgroundImage: `url(${joueur.photo})`}}>
              <p className={styles.jerseyNumber} style={{color: joueur.currentClubColor}}>{joueur.jerseyNumber}</p>
              <div className={styles.playerFullname}>
                <p className={styles.playerFirstname}>{joueur.firstname}</p> 
                <p className={styles.playerLastname}>{joueur.lastname}</p>
                
              </div>
            </div>
            <div className={styles.playerCardName}>
              
            </div>
            <img className={styles.countryFlag} src={joueur.countryFlag}/>
          </div>
          
        )
      })
      }
    </div>
  )
}

export default JoueursCard