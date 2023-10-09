import React from 'react'
import styles from './Home.module.scss'
import { NavLink } from 'react-router-dom'
import ButtonStyled from '../../Bouton/Bouton.styled.js'

const Home = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroBannerTitle}>
        <h1>LA LIGUE 1 UBER EATS EST A L'HONNEUR SUR FOOTIX</h1>
      </div>
      <div className={styles.heroBannerButton}>
        <NavLink to='/joueurs'><ButtonStyled>Découvrez les joueurs</ButtonStyled></NavLink>
      </div>
    </div>
  )
}

export default Home
