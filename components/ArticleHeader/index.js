import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Row,
  Col,
  Space,
} from 'antd'
import {
  ArrowLeftOutlined,
} from '@ant-design/icons'
import { parseISO, format } from 'date-fns'
import Styles from './styles.module.css'

export default class ArticleHeader extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    const article = this.props.article
    const niceDate = article.date ? format(parseISO(article.date), 'LLLL d, yyyy') : null

    return (
      
      
                
      <div className={Styles['container']}>

        <div className={Styles['arrow-back']}>
          <Link href='/articles'>
            <a>
              <ArrowLeftOutlined />
            </a>
          </Link>
        </div>

        <div className={Styles['text-container']}>
        <Row justify="space-around" align="middle" style={{height: '100%', width: '100%'}}>
            <Col span={24}>
              
              <div className={Styles['date']}>
                {niceDate}
              </div>
              <div className={Styles['title']}>
                  {article.title}
              </div>
              <div className={Styles['subtitle']}>
                {article.subtitle}
              </div>
            </Col>
          </Row>
        </div>


        <div className={Styles['tag-container']}>
            <Space>
              {
                article.tags.map((t, i) => <div className={Styles['tag']} key={i}>{t}</div>)
              }
            </Space>
        </div>

        <div className={Styles['dark-background']}/>
        <Image 
            src={article.cover}
            layout='fill'
            objectFit='cover'
            quality={100}
          />
      </div>
      
    )
  }
}