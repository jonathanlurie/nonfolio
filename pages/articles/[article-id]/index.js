// these imports are for static generation:
import { promises as fs } from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { getArticle } from '../../../core/data' 
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
import { Row, Col } from 'antd'
import {
  TwitterCircleFilled,
  GithubFilled,
  SmileFilled,
  ReadOutlined,
} from '@ant-design/icons'
import Styles from './styles.module.css'
import HomeStyles from '../../../styles/Home.module.css'
import ArticleHeader from '../../../components/ArticleHeader'
// import Markdown from 'markdown-to-jsx';
import HighlightedMarkdown from '../../../components/HighlightedMarkdown'


class ArticlesPage extends React.Component {

  constructor(props) {
    super(props)
      
    console.log(props)
    

  }

  render() {
    const article = this.props.article
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

        <ArticleHeader article={article}/>

       
        <Row
         className={Styles['articles-content']}
        >
          <Col xs={1}  sm={2}  md={5}  lg={6} xl={6}>
          </Col>

          <Col xs={22}  sm={20}  md={14}  lg={12} xl={12}>
            <HighlightedMarkdown>{article.markdown}</HighlightedMarkdown>
          </Col>

          <Col xs={1}  sm={2}  md={5}  lg={6} xl={6}>
          </Col>
        </Row>
{/* 
        <div className={Styles['footer']}>

        </div> */}

      </div>
    )
  }
}


export async function getStaticProps(context) {

  console.log('context', context);
  const articleId = context.params['article-id']
  const article = await getArticle(articleId)

  if (article === null) {
    // TODO: can the article be missing? Or is it caught earlier by getStaticPaths
  }

  return {
    props: {
      article
    }, // will be passed to the page component as props
  }
}


export async function getStaticPaths() {
  // // get article listing:
  const listingPath = path.join('public', 'blog', 'articles', 'config.yaml')
  const yamlListing = await fs.readFile(listingPath, 'utf-8')
  const articleListing = yaml.load(yamlListing).articles

  console.log(articleListing)

  return {
    paths: articleListing.map(id => {
      return {
        params: {
          'article-id': id
        }
      }
    }),

    fallback: false // See the "fallback" section below
  };
}

export default withRouter(ArticlesPage)