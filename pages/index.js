import Card from "../components/Home/Card";
import Feature from "../components/Home/Feature";
import Timeline from "../components/Home/Timeline";
import Alumni from "../components/Home/Alumni";
import Professor from "../components/Home/Professor";
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Hero from "../components/common/Hero";
import {Row , Container} from 'react-bootstrap'

export default function Home() {
  return (
    <Layout title="Home | MicroBird">
      <Hero img="/images/events/project-hero.png" 
        title="Home"
        desc="Lorem Ipsum is simply dummy text of the printing and  Lor    and typesetting industry. Lorem Ipsum has Lorem Ipsum   and simply dummy . Lorem Ipsum has Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and  Lor    and typesetting indust . Lorem Ipsum has Lorem Ipsum is " 
      />
      <div className={styles.home} style={{marginTop : "2rem"}}>
        <Card />
        <Feature />
        <Timeline />
        <Professor />
        <Alumni />
      </div>
    </Layout>
  );
}

