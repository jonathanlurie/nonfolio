---
# Those 3 dashes above are very important, they help separate your article
# metada from the article body.
# At the end of the metadata section, there will be again 3 dashes to close
# the section. They must be present.

# By the way, the metadata section uses the YAML syntax, where lines that start with 
# the hash (#) character are called 'comments', they are not interpreted and serve
# only as a way to document and explain things. Whenever you feel comfortable enough
# with the YAML syntax, you can delete the lines starting with a hash character.
# Or you can leave them, it does not matter. 

# The title is what is going to be displayed with big letters on top of your
# article. Try to keep is short because multiline titles are less easy to read.
title: Article Template

# The date is always in format YYYY-MM-DD
# Note that the date has no influence in the sorting of your articles.
date: 2020-01-01

# The excerpt is a short abstract that briefly describe what you are going to 
# write about. When you share an article on social media (Facebook, Twitter),
# a card is generated where the exerpt is going to show up. It can be multiline
# but try to make it two sentences or less.
excerpt: This article may not be very interesting, but it can be very helpful

# The cover is a link to an image. This link can be an absolute URL
# or it can be relative to the folder of your article. For example, if mosaic.png
# was in your article folder, the value of the 'cover' field would have been
# 'mosaic.png' without the 'http' thingy before.
# The cover image will show on the listing of articles and also as the background
# of your title, slightly darkened (with title in white letters).
# If you decide not to have any cover image, then your article will show any
# background image and the title is going to show with black letters.
# When there is no cover, the article listing will show a 'The Post' mosaic image.
# To not use a cover, remove the line below or leave an empty string as the value.
cover: mosaic.jpg

# Tags are not used yet in The Post, but in the future, we will display them.
tags:
  - tutorial
  - how-to

# The 3 dashes below is closing the metadata section. Always keep it here.
# The line that comes just after it is the begining of the article,
# in Markdown syntax.
---

# A Big Title
Here goes some text in **Markdown** syntax.  

If you are not familiar with it, know that you will quickly pick it up as there are only few important things to remember:
- title such as the first line of this article is a line that starts by a hash character (`#`). If you need subtitles, then use multiple hashes (`##` or `###`, etc.)
- to write text in **bold**, just surround it with `**` before and `**` again after. An alternative syntax is to use a pair of underscores instead of a pair of asterisks (to avoid conflicts when you want to have bold asterisks).
- to write text in *italic*, just surround it with a single `*` before and `*` again after. An alternative syntax is to use a single underscore instead (to avoid conflicts when you want to have italic asterisks).
- to create a link to another URL, use `[text of the link](http://example.com)`
- for an image, it's almost the same but start with an exclamation mark `![alternative text](http://example.com/image.jpg)`. Note that the alternative text is optional, you could have it like that `![](http://example.com/image.jpg)` but it's a good practice to have an *alt text* it as it helps people who need audio-description
- to create a list such as this one, start the line with a dash (`-`)
- to create a list with numerical index, start each line with a number followed by a dot and a whitespace. Just like that `1. The first item` then on the following line `2. The second item`, etc.
- to jump line like when you want to create a paragraph, leave a a full blank line. To jump line like you just want to go to next line (but not extra paragraph separation) just finish your line by two whitespace-characters and continue writing on the following line (not fully blank line in between). 

Since this last point is a bit more subtle, here is an illustration:

My text is on two lines in edit mode
but on a single one in display mode.

My text is on two lines in edit mode (there are 2 whitespace chars here -->)  
and in two lines in display mode.


My text on two lines in edit mode

with a paragraph separation in the middle.

[Here](https://raw.githubusercontent.com/thepostio/thepostio-content/main/articles/article-template/index.md) you can open this file in text mode with non-interpreted Markdown.

I hope this is helping you getting started!

```js
function main() {
  const ahah = 'hello'
}
```


[— @jonathanlurie](https://twitter.com/jonathanlurie)