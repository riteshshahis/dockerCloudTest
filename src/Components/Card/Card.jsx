import React from 'react'
import styles from "./Card.module.scss";


const Card = (props) => {

    const{
        name,
        category,
        start,
        end
        } = props.companyData ;

        
    return (
        <section className={styles.Card}>
            <h1>{name}</h1>
            <h2>Industry: {category}</h2>
            <h3>Start: {start}</h3>
            <h4>End: {end}</h4>
        </section>
    )
}

export default Card
