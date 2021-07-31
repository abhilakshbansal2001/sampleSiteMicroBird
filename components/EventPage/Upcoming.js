import { Button } from 'react-bootstrap'
import React from 'react'
import styles from './Upcoming.module.css'

const Upcoming = () => {
    return (
        <div className={styles.upcoming}>
            <img src="/images/events/iot.png" />
            <div className={styles.content}>
                <h2>Lorem Ipsum is</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and  Lor    and typesetting industry. Lorem Ipsum has Lorem Ipsum   and simply dummy . Lorem Ipsum has Lorem Ipsum is </p>
                <div className={styles.organize}>Organized On: 12 August 2020</div>
                <div className={styles.btns}>
                    <Button className={styles.btn} >dhuj</Button>
                    <Button className={styles.btn}>dhuj</Button>
                </div>
            </div>
        </div>
    )
}

export default Upcoming
