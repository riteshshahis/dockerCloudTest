import React from 'react'
import Card from '../Card'

import styles from "./CardList.module.scss";


const CardList = (props) => {

const{
name,
category,
start,
end
} = props.companiesData ;

    return (
        <div class={styles.CardList}>
        {props.companiesData.map(companyData => <Card companyData={companyData} />)}
    </div>
    )
}

export default CardList
