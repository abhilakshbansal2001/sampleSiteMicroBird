import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Hero from '../components/common/Hero'
import Layout from '../components/layout'
import Member from '../components/TeamPage/Member'
import SecCard from '../components/TeamPage/SecCard'
import styles from '../styles/Team.module.css'

const team = () => {
    return (
        <Layout title="Team" >
        <div className={styles.team}>
        <div className={styles.hero}>
            <Hero title="Our Team" img="/images/team/team-hero.png" desc = "Lorem Ipsum is simply dummy text of the printing and  Lor and typesetting industry. Lorem Ipsum has Lorem Ipsu"/>
           
        </div>
        <div className={styles.container}>
            <h1 className="text-center display-4 py-2 mb-4" style={{fontWeight:"700"}}>Secretories</h1>
            <Row className="d-flex justify-content-center px-4" >
                <Col className={styles.secCardCol} md={3}>
                    <SecCard />
                </Col>                         
                <Col className={styles.secCardCol} md={3}>
                    <SecCard />
                </Col>                         
                <Col className={styles.secCardCol} md={3}>
                    <SecCard />
                </Col>                         
                <Col className={styles.secCardCol} md={3}>
                    <SecCard />
                </Col>                         
            </Row>
        </div>
        <section className={styles.jsec}> 
        <div className="row text-center justify-content-center mb-5 hidden">
        <div className="col-8">
            <h1>JSec</h1>
            <p className="lead">Far far away, behind the word mountains, far from the countries.</p>
        </div>
        </div>
            <div className={styles.container}>
            
                <Row className="d-flex justify-content-between px-4">
                    <Col className={styles.secCardCol} md={3}>
                        <SecCard />
                    </Col>                         
                    <Col className={styles.secCardCol} md={3}>
                        <SecCard />
                    </Col>                         
                    <Col className={styles.secCardCol} md={3}>
                        <SecCard />
                    </Col>                         
                    <Col className={styles.secCardCol} md={3}>
                        <SecCard />
                    </Col>                         
                        
                                
                </Row>
            </div>
        </section>
        <section className="fdb-block team-1 " style={{padding: "2em 0px"}}>
  <div className="container-fluid">
    <div className="row text-center justify-content-center mb-5 pb-4">
      <div className="col-8">
        <h1>Our Team</h1>
        <p className="lead">Far far away, behind the word mountains, far from the countries.</p>
      </div>
    </div>

    <div className="row-50"></div>

    {/* <div className="row" style={{minHeight:'70vh'}}> */}
      {/* <div className="col-md-4 col-sm-6 text-center">
        <div className="fdb-box p-0">
          <img alt="image" style={{width : "90%" ,maxHeight: "400px", objectFit:"cover", margin:"0 auto"}} className="img-fluid rounded-0 text-center" src="https://images.unsplash.com/photo-1546567850-8a49d669d37a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80" />

          <div className="content p-3">
            <h3><strong>Sara Doe</strong></h3>
            <p>Founder</p>
          </div>
        </div>
      </div> */}
        {/* <Member /> */}
    

    {/* </div> */}

            <Container fluid>
            
                <Row className="d-flex justify-content-between">
                    <Col className={styles.secCardCol} md={3}>
                        <Member />
                    </Col>                         
                    <Col className={styles.secCardCol} md={3}>
                        <Member />
                    </Col>                         
                    <Col className={styles.secCardCol} md={3}>
                        <Member />
                    </Col>                         
                    <Col className={styles.secCardCol} md={3}>
                        <Member />
                    </Col>                         
                    <Col className={styles.secCardCol} md={3}>
                        <Member />
                    </Col>                         
                    <Col className={styles.secCardCol} md={3}>
                        <Member />
                    </Col>                         
                    <Col className={styles.secCardCol} md={3}>
                        <Member />
                    </Col>                         
                    <Col className={styles.secCardCol} md={3}>
                        <Member />
                    </Col>                         
                        
                                
                </Row>
            </Container>
  </div>
</section>
        </div>
        </Layout>
    )
}

export default team
