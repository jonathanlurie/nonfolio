// these imports are for static generation:
import { promises as fs } from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { getArticle } from '../../core/data'
// import matter from 'gray-matter'
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
import ArticleCard from '../../components/ArticleCard'
// import Markdown from 'markdown-to-jsx';
import HighlightedMarkdown from '../../components/HighlightedMarkdown'


class Articles extends React.Component {

  constructor(props) {
    super(props)
      
    console.log(props.articles)
    

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

        these are the articles

        <div >
          
          {
            this.props.articles.map((article, i) => {
              return <ArticleCard article={article} key={i}/>
            })
          }

          {/* <ArticleCard article={this.props.articles[0]}/> */}

          {/* <Image 
            src={this.props.articles[0].cover}
            width={200}
            height={100}
          /> */}

          {/* <HighlightedMarkdown>{this.props.articles[0].markdown}</HighlightedMarkdown> */}
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

  const articles = []

  for (let i = 0; i < articleListing.length; i += 1) {
    const articleId = articleListing[i]
    const article = await getArticle(articleId)
    articles.push(article)
  }

  return {
    props: {
      articles
    }, // will be passed to the page component as props
  }
}

export default withRouter(Articles)