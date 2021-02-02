import React from 'react'
import Image from 'next/image'
import Styles from './styles.module.css'

export default class ArticleCard extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    const article = this.props.article

    return (
      <div className={Styles['container']}>
        <div className={Styles['text-container']}>
          <div className={Styles['title']}>
            {article.title}
          </div>
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