import { promises as fs } from 'fs'
import path from 'path'

import yaml from 'js-yaml'
// import matter from 'gray-matter'
// import Marked from 'marked'
// import DOMPurify from 'dompurify'
// import { JSDOM } from 'jsdom'



export async function getArticle(articleId) {
  const articleFolderPath = path.join('public', 'blog', 'articles', articleId)
  const articleContentPath = path.join('public', 'blog', 'articles', articleId, 'index.md')
  const rawArticle = await fs.readFile(articleContentPath, 'utf-8')

  const rawSplitted = splitFrontMatterFromMarkdown(rawArticle)
  const article = yaml.load(rawSplitted.frontMatter)
  article.markdown = rawSplitted.markdown
  article.articleId = articleId
  
  // fixing cover URL
  if (article.cover && !article.cover.startsWith('http')) {
    // absolute path from the root (becaus it's in 'public')
    article.cover = path.join('/blog', 'articles', articleId, article.cover)
  } else if (!('cover' in article)) {
    article.cover = null
  }

  // making the date serializable
  if ('date' in article && article.date instanceof Date) {
    article.date = article.date.toISOString()
  }else if(!('date' in article)) {
    article.date = null //DateTools.getIso8601z({onlyDate: true})
  }

  if (!('title' in article)) {
    article.title = 'Untitled'
  }

  if (!('subtitle' in article)) {
    article.subtitle = null
  }

  if (!('excerpt' in article)) {
    article.excerpt = ''
  }

  if (!('tags' in article)) {
    article.tags = []
  }

  return article
}


function splitFrontMatterFromMarkdown(rawText) {
  const sep = '---'
  const splitted = rawText.split(sep)

  if (splitted.length < 3) {
    throw new Error('The raw text of the article is invalid yaml + md')
  }

  return {
    frontMatter: splitted[1],
    markdown: rawText.slice(splitted[0].length + splitted[1].length + 2 * sep.length)
  }
}



export function markdownReplaceImageURL (md, prefix) {
  let mdMod = md.replace(/!\[[a-zA-Z0-9 ]*\]\(\s*(\S*)\s*\)/gm, function(correspondance, p1){
    if (p1.startsWith('http')) {
      return correspondance
    } else {
      return correspondance.replace(p1, pathJoin([prefix, p1]))
    }
  })
  return mdMod
}


export function pathJoin (parts, separator = '/') {
  let cleanParts = []

  for (let i=0; i<parts.length; i++) {
    let part = parts[i]
    if (i > 0) {
      if (part[0] === separator) {
        part = part.substring(1)
      }
    }

    if (part[part.length - 1] === separator) {
      part = part.substring(0, part.length - 1)
    }

    cleanParts.push(part)
  }

  return cleanParts.join(separator)
}


function mdToHtml(md) {
  // return Marked(md)

  // const { window } = new JSDOM('<!DOCTYPE html>')
  // const domPurify = DOMPurify(window)
  // return domPurify.sanitize(Marked(md), { ADD_TAGS: ["iframe"] })
}