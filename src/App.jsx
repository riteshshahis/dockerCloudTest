import React from 'react'
import styles from "./App.module.scss";
// Our Data file
import companies from "./Data/Data";
// Components
import CardList from './Components/CardList';

const App = () => {
  return (
    <>
    <div className={styles.cardList}>
        <CardList  companiesData={companies} />
    </div>
    </>
  )
}

export default App

