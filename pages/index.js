import React from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { Tooltip, Space, Button } from 'antd'
import {
  TwitterCircleFilled,
  GithubFilled,
  SmileFilled,
  ReadOutlined,
} from '@ant-design/icons'
import Styles from '../styles/Home.module.css'

class Home extends React.Component {

  render() {
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

          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-43603368-1"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-43603368-1');
                `,
            }}
          />

        </Head>

        <div className={Styles['header']}>

          <div className={Styles['blog-button']}>
            <Link href='/articles'>
              <a>
                <ReadOutlined />
              </a>
            </Link>
          </div>

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
            I build scientific software, mostly for computing things about brains, triangles and pixels. <span className={Styles['photo-link']}> (I also like to take pictures)</span>
          </p>
          <Space className={Styles['social-links']}>
            <a href='https://twitter.com/jonathanlurie'>
              <TwitterCircleFilled/>
            </a>
            <a href='https://github.com/jonathanlurie'>
              <GithubFilled/>
            </a>
            <a href='#'>
              <Tooltip placement='right' color='#5ddaef' title={<span className={Styles['courier-label']}>lurie.jo 📮 gmail com</span>}>
                <SmileFilled />
              </Tooltip>
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
}


export default withRouter(Home)