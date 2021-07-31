import React from 'react'
import styles from './SecCard.module.css'

const SecCard = () => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.imgBx}>
                    <img src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                </div>
                <div className={styles.details}>
                    <h2>SomeOne Famous<br /><span>Producer</span></h2>
                </div>
            </div>   
        </>
    )
}

export default SecCard
