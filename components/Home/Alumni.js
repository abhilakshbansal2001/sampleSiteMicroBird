import React from "react";
import styles from "./Alumni.module.css";
import { Carousel } from "react-bootstrap";

function Alumni() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.alumni}>
      <h1 className="py-3">Our Alumni</h1>
    <Carousel className={styles.carousel} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className={styles.slide}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <h5>First | label</h5>

          <p>Lorem Ipsum is simply dummy text of the printIpsum is simplying and Lor and Lorem Ipsum is simply dummy text of the printIpsum is simplying and Lor anLorem Ipsum is simply dummy text of the printIpsum isf simplying and Lor anis simply dummy text of the printIpsum is simplying and Lor anLorem Ipsum is simply dummy text of the priLorem Ipsum is simply dummy text of the prfintIpsum is simplying and Ipsum is simplying and L</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.slide}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <h5>First | label</h5>

          <p>Lorem Ipsum is simply dummy text of the printIpsum is simplying and Lor and Lorem Ipsum is simply dummy text of the printIpsum is simplying and Lor anLorem Ipsum is simply dummy text of the printIpsum isf simplying and Lor anis simply dummy text of the printIpsum is simplying and Lor anLorem Ipsum is simply dummy text of the priLorem Ipsum is simply dummy text of the prfintIpsum is simplying and Ipsum is simplying and L</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      
    </Carousel>
    </div>
  );
}
export default Alumni;
