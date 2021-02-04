import React from 'react'
import Image from 'next/image'
import {
  Row,
  Col,
  Space,
} from 'antd'
import { parseISO, format } from 'date-fns'
import Styles from './styles.module.css'

export default class ArticleCard extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    const article = this.props.article
    const niceDate = article.date ? format(parseISO(article.date), 'LLLL d, yyyy') : null

    return (
      <div className={Styles['container']}>

        <div className={Styles['text-container']}>
        <Row justify="space-around" align="middle" style={{height: '100%', width: '100%'}}>
            <Col span={24}>
              
              <div className={Styles['title']}>
                {article.title}
              </div>
              <div className={Styles['date']}>
                {niceDate}
              </div>
            </Col>
          </Row>
        </div>

        <div className={Styles['excerpt']}>
          {article.excerpt}
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
        {article.title}
      </div>
    )
  }
}