// these imports are for static generation:
import { promises as fs } from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import matter from 'gray-matter'
// import Marked from 'marked'
// import DOMPurify from 'dompurify'
// import { JSDOM } from 'jsdom'

// these imports are for frontend
import React from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Tooltip, Space, Button } from 'antd'
import {
  TwitterCircleFilled,
  GithubFilled,
  SmileFilled,
  ReadOutlined,
} from '@ant-design/icons'
import Styles from './styles.module.css'
import HomeStyles from '../../styles/Home.module.css'
import { utc } from 'moment'

class Articles extends React.Component {

  constructor(props) {
    super(props)
      
    console.log(props.articleMeta)
    

  }

  render() {
    return (
      <div className={HomeStyles['container']}>
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

        <div>
          these are the articles

          <Image 
            src={this.props.articleMeta[0].cover}
            width={200}
            height={100}
          />
          
        </div>



      </div>
    )
  }
}


export async function getStaticProps(context) {
  
  // get article listing:
  const listingPath = path.join('public', 'blog', 'articles', 'config.yaml')
  const yamlListing = await fs.readFile(listingPath, 'utf-8')
  const articleListing = yaml.load(yamlListing).articles
  // console.log(articleListing)

  const articleMeta = []

  for (let i = 0; i < articleListing.length; i += 1) {
    const articleId = articleListing[i]
    const articleFolderPath = path.join('public', 'blog', 'articles', articleId)
    const articleContentPath = path.join('public', 'blog', 'articles', articleId, 'index.md')
    const rawArticle = await fs.readFile(articleContentPath, 'utf-8')

    // decided not to use gray-matter because it messes up with cover path
    const yamlHeader = rawArticle.split('---').filter(el => el !== '')[0]
    const metadata = yaml.load(yamlHeader)
    metadata.articleId = articleId
    
    // fixing cover URL
    if (metadata.cover && !metadata.cover.startsWith('http')) {
      // absolute path from the root (becaus it's in 'public')
      metadata.cover = path.join('/blog', 'articles', articleId, metadata.cover)
    }

    // making the date serializable
    if ('date' in metadata && metadata.date instanceof Date) {
      metadata.date = metadata.date.toISOString()
    }

    articleMeta.push(metadata)
  }



  return {
    props: {
      articleMeta
    }, // will be passed to the page component as props
  }
}

export default withRouter(Articles)