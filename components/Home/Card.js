import React from "react";
import styles from "./Card.module.css";
import {Col , Container , Row} from 'react-bootstrap'
function Card() {
  return (
    
      <Container fluid className="px-5" className={styles.card}>
          <Row style={{width:'90%'}} className="mx-auto">

          <Col md={12} className={styles.card_col}>
            <Container fluid className={styles.cont}>
              <Row className={styles.row}>
                <Col md={8} className={styles.content}>
                  <h3>What we do? </h3>
                  <p>
                    We are an organization of budding electronics enthusiasts aiming at their motto "From Innovation to Implementation"
                    We help students to acquire and develop new skill-sets by conducting various lectures and workshops.
                    We provide resources and the technical know-how to realize and shape their projects through regular meetings and sessions we improve students’ technical and leadership skills.
                  </p>
                </Col>
                <Col md={4} className={styles.img}>
                  <img  src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"/>
                </Col>
              </Row>  
            </Container>
          </Col>

          <Col md={12} className={styles.card_col}>
            <Container fluid className={styles.cont}>
              <Row className={styles.row}>
                <Col md={4} className={styles.img}>
                  <img  src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"/>
                </Col>
                <Col md={8} className={styles.content}>
                  <h3>Who we are? </h3>
                  <p>The name Microbird is symbolic of the vision of the organization where Micro reminds us of it's connection with The Electronics industry and the term bird is symbolic of the vision the founders wanted to it to progress, reaching the higher skies like a bird aiming at new successes and milestones and spreading wings of innovation all around.
                  </p>
                </Col>
              </Row>  
            </Container>
          </Col>
          <Col md={12} className={styles.card_col}>
            <Container fluid className={styles.cont}>
              <Row className={styles.row}>
                <Col md={8} className={styles.content}>
                  <h3>Why Us? </h3>
                  <p>
                  Microbird aims to provide a platform to explore the world of electronics through hands-on experience. We strive to aid students in acquiring practical knowledge and taking part in innovative projects which help them contemplate, discuss, debate and tackle real-life challenges. Teamwork and bonding is what runs our club and helps us strive.
                  </p>
                </Col>
                <Col md={4} className={styles.img}>
                  <img  src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"/>
                </Col>
              </Row>  
            </Container>
          </Col>
          
         
          
          
         
          
          
          </Row>
      </ Container >
      

  );
}

export default Card;


{/* <a href="#" className={styles.card} style={{justifyContent : direction === "left" ? "flex-start" : "flex-end"}}>
        <div className={styles.inner}>
          <h4>What we do ?</h4>
          <p className={styles.para}>
            Mit 117 Sachen durch Klugheimschen Basaltgebirge
          </p>
          <time className={styles.subtitle}>03. März 2021</time>
        </div>
      </a> */}