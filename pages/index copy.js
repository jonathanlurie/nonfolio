import Head from 'next/head'
import { Row, Col, Divider, Space } from 'antd'
import {
  StarFilled
} from '@ant-design/icons'
import Styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={Styles['container']}>
      <Head>
        <title>Jonathan Lurie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col xs={2}  sm={2}  md={4}  lg={4} xl={6}>
        </Col>
        <Col xs={20} sm={20} md={16} lg={16} xl={12}>
        


          <Divider>
            <div className={Styles['my-face-container']}>
              <img
                src="/images/myface.jpg"
                className={Styles['my-face']}
              />
            </div>
          </Divider>


          <img
            src="/images/hey.png"
            className={Styles['hey-img']}
          />

          <div
            className={Styles['description']}
          >
            My name is <span >Jonathan Lurie</span>,<br/>I build scientific software, mostly for computing things, moving pixels and triangles.
          </div>
          <div className={Styles['job-list']}>
            
            <Space className={Styles['job-list-item']}>
              <StarFilled style={{ color: '#ffd500'}}/>
              <span
                className={Styles['job-list-item-when']}
              >
                now
              </span>

              <span
                className={Styles['job-list-item-what']}
              >
                building a brain atlas at <a href='https://www.epfl.ch/research/domains/bluebrain/'>Blue Brain Project</a>, <a href='https://www.epfl.ch/'>EPFL</a>. Geneva, Switzerland 🇨🇭
              </span>
            </Space>

            <Space className={Styles['job-list-item']}>
              <StarFilled style={{ color: '#ffd500'}}/>
              <span
                className={`${Styles['job-list-item-when']} ${Styles['old-jobs']}`}
              >
                previously
              </span>

              <span
                className={Styles['job-list-item-what']}
              >
                building a brain visualization and analysis tools at the MNI/McGill. Montreal, Canada 🇨🇦
              </span>
            </Space>



            <Space className={Styles['job-list-item']}>
              <StarFilled style={{ color: '#ffd500'}}/>
              <span
                className={`${Styles['job-list-item-when']} ${Styles['old-jobs']}`}
              >
                before that
              </span>

              <span
                className={Styles['job-list-item-what']}
              >
                Building image/signal processing tools for satelite image processing pipeline, Thales/CNES. Toulouse, France 
              </span>
            </Space>

          </div>


          <Divider/>

        </Col>
        <Col xs={2}  sm={2}  md={4}  lg={4} xl={6}>
        </Col>
      </Row>
    
    </div>
  )
}
