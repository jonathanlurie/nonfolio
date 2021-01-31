import yaml from 'js-yaml'
import matter from 'gray-matter'
import Marked from 'marked'
import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'




export async function getPostData(postid) {
  let folderUrl = UrlBuilder.getArticleFolder(username, postid, provider)
  let url = UrlBuilder.getArticle(username, postid, provider)

  let articleData = {
    data: null,
    error: null,
  }

  const articleRes = await fetch(url)
  if (!articleRes.ok) {
    articleData.error = 'This article does not exist'
  }

  try {
    // markdown business
    const textContent = await articleRes.text()
    const matterResult = matter(textContent)
    const makdownContent = markdownReplaceImageURL(matterResult.content.trim(), folderUrl)

    // Sometimes, yaml parser converts date strings into instances of Date class.
    // We don't want that because then serialization to client side is breaking.
    if ('date' in matterResult.data && matterResult.data.date instanceof Date) {
      matterResult.data.date = DateTools.getIso8601z({date: matterResult.data.date, onlyDate: true})
    } else if(!('date' in matterResult.data)) {
      matterResult.data.date = null //DateTools.getIso8601z({onlyDate: true})
    }

    // fix cover to relative path
    if (matterResult.data.cover && !matterResult.data.cover.startsWith('http')) {
      matterResult.data.cover = pathJoin ([folderUrl, matterResult.data.cover])
    } else if (!('cover' in matterResult.data)) {
      matterResult.data.cover = null
    }

    if (!('title' in matterResult.data)) {
      matterResult.data.title = 'Untitled'
    }

    if (!('subtitle' in matterResult.data)) {
      matterResult.data.subtitle = null
    }

    if (!('excerpt' in matterResult.data)) {
      matterResult.data.excerpt = ''
    }

    if (!('tags' in matterResult.data)) {
      matterResult.data.tags = []
    }

    articleData.data = {
      html: mdToHtml(makdownContent),
      properties: matterResult.data
    }

  } catch(err) {
    articleData.error = err.message
  }

  return articleData
}


export async function getPostMetadata(username, postid, provider = 'github') {
  let folderUrl = UrlBuilder.getArticleFolder(username, postid, provider)
  let url = UrlBuilder.getArticle(username, postid, provider)

  let articleData = {
    data: null,
    error: null,
  }

  const articleRes = await fetch(url)

  if (!articleRes.ok) {
    articleData.error = 'This article does not exist'
  }

  try {
    // markdown business
    const textContent = await articleRes.text()
    const matterResult = matter(textContent)

    // Sometimes, yaml parser converts date strings into instances of Date class.
    // We don't want that because then serialization to client side is breaking.
    if ('date' in matterResult.data && matterResult.data.date instanceof Date) {
      matterResult.data.date = DateTools.getIso8601z({date: matterResult.data.date, onlyDate: true})
    } else if(!('date' in matterResult.data)) {
      matterResult.data.date = null //DateTools.getIso8601z({onlyDate: true})
    }

    // fix cover to relative path
    if (matterResult.data.cover && !matterResult.data.cover.startsWith('http')) {
      matterResult.data.cover = pathJoin ([folderUrl, matterResult.data.cover])
    } else if (!('cover' in matterResult.data)) {
      matterResult.data.cover = null
    }

    if (!('title' in matterResult.data)) {
      matterResult.data.title = 'Untitled'
    }

    if (!('subtitle' in matterResult.data)) {
      matterResult.data.subtitle = null
    }

    if (!('excerpt' in matterResult.data)) {
      matterResult.data.excerpt = ''
    }

    if (!('tags' in matterResult.data)) {
      matterResult.data.tags = []
    }

    articleData.data = {
      ...matterResult.data,
      postid,
      username,
    }

  } catch(err) {
    articleData.error = err.message
  }

  return articleData
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

  const { window } = new JSDOM('<!DOCTYPE html>')
  const domPurify = DOMPurify(window)
  return domPurify.sanitize(Marked(md), { ADD_TAGS: ["iframe"] })
}