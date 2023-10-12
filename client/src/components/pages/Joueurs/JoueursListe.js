import React , { useState } from 'react'
import styles from './Joueurs.module.scss'
import JoueursCard from './JoueursCard'

function JoueursListe() {

  return (
    <div className={styles.listeWrapper}>
      <div className={styles.playerListe}>
        <JoueursCard/>
      </div>
    </div>
  )
}

export default JoueursListe