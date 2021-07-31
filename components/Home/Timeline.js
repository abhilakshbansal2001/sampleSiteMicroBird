import React from "react";
import styles from "./Timeline.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TimelineCard from "./TimelineCard";

function Timeline() {

  const settings = {
    dots: true,
    className: `center ${styles.slider}`,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 4,
    dotsClass :`slick-dots ${styles.dots} `,
    swipeToSlide: true,
    // pauseOnFocus:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className={styles.timeline}>
      <div className={styles.title}>
        <h4>Development of the club in the past years!</h4>
        <h2>Our Timeline !</h2>
      </div>
      
        
        <Slider className={styles.slider} {...settings}>
          <div>
            <TimelineCard year={2020} />
          </div>
          <div>
            <TimelineCard year={2019} />
          </div>
          <div>
            <TimelineCard year={2018} />
          </div>
          <div>
            <TimelineCard year={2017} />
          </div>
          <div>
            <TimelineCard year={2015} />
          </div>
          
        </Slider>
      
    </div>
    
    </>
  );
}
export default Timeline;
