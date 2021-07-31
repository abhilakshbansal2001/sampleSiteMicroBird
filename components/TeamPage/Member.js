import React from 'react'
import styles from './Member.module.css'
import { FaInstagram , FaFacebook  } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const JSecCard = () => {
    return (
        <>
           
    
            <div className={styles.card_wrapper}>
            
            <div className={styles.card}>
                
                <div className={styles.card_image}>
                <img src="https://image.ibb.co/dUTfmJ/profile_img.jpg" alt="profile one" />
                </div>

            <ul className={styles.social_icons}>
                <li>
                <a href="#" target="_Blank">
                    <FaInstagram />
                </a>
                </li>
                <li>
                <a href="#" target="_Blank">
                    <FaFacebook />
                    {/* <i className={styles.fab fa_instagram"></}> */}
                </a>
                </li>
                <li>
                <a href="#" target="_Blank">
                    <SiLinkedin />
                    {/* <i className={styles.fab fa_twitter"></}> */}
                </a>
                </li>
                
            </ul>

            <div className={styles.details}>
                <h2>John Smith 
                {/* <br /> */}
                <span className={styles.job_title}>UI Developer</span>
                </h2>
            </div>
            </div>
        </div>
    
    

     

        </>
    )
}

export default JSecCard
