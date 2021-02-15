import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Row,
  Col,
  Space,
} from 'antd'

import Styles from './styles.module.css'

export default class SuperImage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fullScreen: false,
    }
  }


  toggleFullScreen = () => {
    this.setState({fullScreen: !this.state.fullScreen})
    console.log('toggle')
  }


  render() {
    const fullScreenImage = (
      <div
        style={{
          zIndex: 3,
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          background: '#FFF',
          left: 0,
          top: 0,
        }}
        onClick={this.toggleFullScreen}
      >
        <img
          src={this.props.src}
          style={{
            maxWidth: '97%',
            maxHeight: '97%',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto'
          }}
        />
      </div>
    )

    return (
      <div style={{marginBottom: 30}}>

      {
        this.state.fullScreen ? fullScreenImage : null
      }

      <img
        loading='lazy'
        style={{
          maxWidth: '100%',
          maxHeight: 'calc(100vh - 50px)',
          display: 'list-item',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        {...this.props}
        onClick={this.toggleFullScreen}
      />
      <div
        style={{
          color: '#868686',
          fontFamily: "'Roboto', sans-serif",
          textAlign: 'center'
        }}
      >
        {this.props.alt}
      </div>
    </div>
    )
  }
}