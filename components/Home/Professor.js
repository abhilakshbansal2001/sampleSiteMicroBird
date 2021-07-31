import React from "react";
import styles from "./Professor.module.css";
import { Container, Row, Col } from "react-bootstrap";

function Professor() {
  return (
    <div className={styles.professorDiv}>
    <Container fluid className={styles.professor}>
      <Row className={styles.row}>
        <Col md={4} className={styles.col}>
          <div className={styles.img}>
            <img
              className="img-responsive"
              src="https://im.indiatimes.in/content/2020/Jun/pp_5edcc594ae128.jpg"
            />
          </div>

          <div className={styles.content}>
            <h2>Proff. Dinesh Kumar</h2>
            
            <p>
              Lorem Ipsum is simply dummy text of the printIpsum is simplying
              and Lor and Lorem Ipsum is simply dummy text of the printIpsum is
              simplying and Lor anLorem Ipsum is simply dummy text of the
              printIpsum isf simplying and Lor anis simply dummy text of the
              printIpsum is simplying and Lor anLorem Ipsum is simply dummy text
              of the priLorem Ipsum is simply dummy text of the prfintIpsum is
              simplying and Ipsum is simplying and L
            </p>
          </div>
        </Col>
        <Col md={4} className={styles.col}>
          <div className={styles.img}>
            <img
              className="img-responsive"
              src="https://im.indiatimes.in/content/2020/Jun/pp_5edcc594ae128.jpg"
            />
          </div>

          <div className={styles.content}>
            <h2>Proff. Dinesh Kumar</h2>
            
            <p>
              Lorem Ipsum is simply dummy text of the printIpsum is simplying
              and Lor and Lorem Ipsum is simply dummy text of the printIpsum is
              simplying and Lor anLorem Ipsum is simply dummy text of the
              printIpsum isf simplying and Lor anis simply dummy text of the
              printIpsum is simplying and Lor anLorem Ipsum is simply dummy text
              of the priLorem Ipsum is simply dummy text of the prfintIpsum is
              simplying and Ipsum is simplying and L
            </p>
          </div>
        </Col>
        
      </Row>
    </Container>
    </div>
  );
}
export default Professor;
