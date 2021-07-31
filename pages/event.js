import React,{useState , useEffect} from 'react'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/Event.module.css'
import { Row,Col,Container } from 'react-bootstrap';
import Upcoming from '../components/EventPage/upcoming';
import Past from '../components/EventPage/Past';
import Hero from '../components/common/Hero';
import Counter from '../components/events/Counter';


const event = (props) => {

    const [isCount , setIsCount] = useState(false);
    const [data , setData] = useState([]);

    useEffect(()=>{
        if(props.data && data.length == 0){
            props.data.sort((a,b) => Number(b.sort) - Number(a.sort))
            setData(props.data);
        }
        
    } , [props])


    return (
        <div>
            <Layout title={"Event | MicroBird"}>
                {/* <div className={styles.hero}>

                <img
                    src="/images/events/events-head.png"
                    alt="Picture of the author"
                    // layout='responsive'
                    width={"100%"}
                    className={styles.image}
                    // height={"auto"}
                    />

                    <div className={styles.headingEvents}>
                        <h1>Events</h1>
                    </div>

                </div> */}

                <Hero title="Event" img="https://images.unsplash.com/photo-1596447737357-381c9e4ab071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" desc = "An institution is always known by it's work"/>

                <div className={styles.content}>
                    <p className="m-0">
                        An institution is always known by it's work. Whatever they do, good or bad adds to their name. We often live without knowing the actual purpose of our names, but once an individual knows the actual purpose, the goals become more clear and achievable.
                    </p>
                </div>

                <div className={styles.timer}>
                    <Container className={styles.timerContainer}>
                
                        <Row className="d-flex justify-content-between">
                            <Col className={styles.timerComponent} xs={4}>
                                <Counter text={"Succesfully conducted Events"} time={23} isCount={isCount}/>
                            </Col>
                            <Col className={styles.timerComponent} xs={4}>
                                <Counter text={"Prizes won in other college Events"} time={20} isCount={isCount}/>
                            </Col>
                            <Col className={styles.timerComponent} xs={4}>
                                <Counter text={"students got involved in our Events"} time={12000} isCount={isCount}/>
                            </Col>
                            
                            
                            
                        </Row>
                    </Container>
                </div>
               

                <div className={styles.upcoming}>
                    <Container className={styles.upcomingContainer}>
                        <h2>Upcoming Events</h2>
                        <Row className="d-flex justify-content-between">
                            <Col className={styles.upcomingComponent} md={6}>
                                <div>
                                    <Upcoming />
                                </div>
                            </Col>
                            <Col className={styles.upcomingComponent} md={6}>
                            <div>
                                    <Upcoming />
                                </div>
                            </Col>
                            
                        </Row>
                    </Container>
                </div>

                {/* ====== Past Events ======== */}

                <div className={styles.past}>
                    <Container className={styles.pastContainer}>
                        <h2>Past Events</h2>
                        <Row className="d-flex justify-content-between" className={styles.pastRow}>
                            {data.map((data,idx) => {
                                return <Col key={idx} className={styles.pastComponent} md={4} sm={6} lg={4}>
                                            <div className="mt-5">
                                                <Past data={data}/>
                                            </div>
                                        </Col>
                            })}
                            {/* <Col className={styles.pastComponent} md={4} sm={6} lg={4}>
                                <div className="mt-5">
                                    <Past />
                                </div>
                            </Col>
                            <Col className={styles.pastComponent} md={4} sm={6} lg={4}>
                                <div className="mt-5">
                                    <Past />
                                </div>
                            </Col>
                            <Col className={styles.pastComponent} md={4} sm={6} lg={4}>
                                <div className="mt-5">
                                    <Past />
                                </div>
                            </Col> */}
                           
                            
                        </Row>
                    </Container>
                </div>
                
            </Layout>
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:1337/events`)
    const data = await res.json()

    if (!data) {
        return {
        notFound: true,
        }
    }

    return {
        props: { 
            data 
        }
    }
}

export default event
