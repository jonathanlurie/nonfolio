import React from 'react'
import Image from 'next/image'
import Markdown from 'markdown-to-jsx'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'


const LazyImg = ({ children, ...props }) => (
  <img loading='lazy' {...props}>{children}</img>
)

export default class HighlightedMarkdown extends React.Component {
  constructor(props) {
    super(props)
    this._htmlDivRef = React.createRef()
  }


  componentDidMount() {
    
    const nodes = this._htmlDivRef.current.querySelectorAll('pre code')
    nodes.forEach((node) => {
      hljs.highlightBlock(node)
    })
  }

  render() {
    return (
      <div ref={this._htmlDivRef}>
        <Markdown
          options={{
            overrides: {
                img: {
                    component: LazyImg,
                },
            },
          }}
        >
          {this.props.children}
        </Markdown>
      </div>
    );
  }
}
