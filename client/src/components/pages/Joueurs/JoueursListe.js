import React , { useState } from 'react'
import styles from './Joueurs.module.scss'
import Data from './JoueursData'
import JoueursCard from './JoueursCard'

function JoueursListe() {

  const [joueurs, setJoueurs] = useState(Data)
  console.log(Data);

  return (
    <div className={styles.listeWrapper}>
      <div className={styles.playerListe}>
        <JoueursCard joueurs={joueurs}/>
      </div>
    </div>
  )
}

export default JoueursListe