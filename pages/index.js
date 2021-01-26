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
      </Head>

      <div className={Styles['header']}>
        
        <div className={Styles['presentation']}>
          <span className={Styles['hey']} >
            Hey,
          </span> 
          <span className={Styles['my-name-is']}> my name is </span><span className={Styles['my-name']}> Jonathan Lurie.</span>
        </div>

        <div className={Styles['my-face']}>
          <img src="/images/myface.jpg" />
        </div>

      </div>


      <div className={Styles['presentation2']}>
        <p>
          I build scientific software, mostly for computing things about brains, triangles and pixels. 
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
