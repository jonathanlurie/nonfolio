import Head from 'next/head'
import { Row, Col, Divider, Space } from 'antd'
import {
  StarFilled,
  TwitterCircleFilled,
  GithubFilled,
} from '@ant-design/icons'
import Styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={Styles['container']}>
      <Head>
        <title>Jonathan Lurie</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#4c4c4c"></meta>
        <meta name="description" content="I build scientific software, mostly for computing things about brains, triangles and pixels."/>
        <meta name="author" content="Jonathan Lurie"/>
        <meta property="og:title" content="Jonathan Lurie"/>
        <meta property="og:url" content="https://jonathanlurie.fr"/>
        <meta property="og:image" content="https://jonathanlurie.fr/images/myface_mountain.jpg"/>
        <meta property="og:description" content="I build scientific software, mostly for computing things about brains, triangles and pixels."/>
        <meta property="og:site_name" content="Jonathan Lurie"/>
        <meta property="og:type" content="profile"/>
        <meta name="twitter:title" content="Jonathan Lurie"/>
        <meta name="twitter:description" content="I build scientific software, mostly for computing things about brains, triangles and pixels."/>
        <meta name="twitter:image" content="https://jonathanlurie.fr/images/myface_mountain.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@jonathanlurie"/>
        <meta name="next-head-count" content="17"/>

      </Head>

      <div className={Styles['header']}>

        <div className={Styles['my-face']}>
          <img src="/images/myface.jpg" alt='This is Jonathan Lurie profile picture'/>
        </div>
        
        <div className={Styles['presentation']}>
          <span className={Styles['hey']} >
            Hey,
          </span> 
          <span className={Styles['my-name-is']}> my name is </span><span className={Styles['my-name']}> Jonathan Lurie.</span>
        </div>

        

      </div>


      <div className={Styles['presentation2']}>
        <p>
          I build scientific software, mostly for computing things about brains, triangles and pixels. <span className={Styles['photo-link']}><a href='https://jonathanlurie.myportfolio.com'> (I also like to take pictures)</a></span>
        </p>
        <Space className={Styles['social-links']}>
          <a href='https://twitter.com/jonathanlurie'>
            <TwitterCircleFilled/>
          </a>
          <a href='https://github.com/jonathanlurie'>
            <GithubFilled/>
          </a>
        </Space>
      </div>

      <div className={Styles['career']}>
        <span className={Styles['background-text']}>NOW</span>I am curently building the brain atlas at <a href='https://www.epfl.ch/research/domains/bluebrain/'>The Blue Brain Project</a>, <a href='https://www.epfl.ch/en/'>EPFL</a>, Switzerland 🇨🇭<br/>
        <a href='/resume_jonathan_lurie.pdf' style={{fontSize: '0.65em'}}>(my serious CV here)</a>
      </div>

    </div>
  )
}
