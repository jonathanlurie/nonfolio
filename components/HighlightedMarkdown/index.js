import React from 'react'
import Image from 'next/image'
import Markdown from 'markdown-to-jsx'
import SuperImage from '../SuperImage'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import Styles from './styles.module.css'


const DivForP = ({ children, ...props }) => {

  return (
      <div {...props}>{children}</div>
  )
}


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
      <div ref={this._htmlDivRef} >
        <Markdown
          className={Styles['container']}
          options={{
            overrides: {
                img: {
                    component: SuperImage,
                },
                p: { // because we want to 
                  component: DivForP,
                }
            },
          }}
        >
          {this.props.children}
        </Markdown>
      </div>
    );
  }
}
