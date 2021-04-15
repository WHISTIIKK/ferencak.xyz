/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './style.css'

import GetRandomEmoji from '../../utils/GetRandomEmoji'

export default class HomeSection extends React.Component {

  render() {
    return (
      <section id="home">
        <div className='to-left'>
          <div className='inner'>
            <span className='comment single'>// Welcome to my portfolio! { GetRandomEmoji() }</span>
            <p>Nikolas</p>
            <p>Ferenčák</p>
            <div className='info'>
              <span className='comment multi'>/**</span>
              <span className='comment multi'>&nbsp;* Junior Developer, UI/UX Designer</span>
              <span className='comment multi'>&nbsp;* </span>
              <span className='comment multi'>&nbsp;* What experiences do I have?</span> 
              <span className='comment multi'>&nbsp;* <span className='bolder'>@experience</span> NodeJS</span>
              <span className='comment multi'>&nbsp;* <span className='bolder'>@experience</span> React</span>
              <span className='comment multi'>&nbsp;* <span className='bolder'>@experience</span> Angular</span>
              <span className='comment multi'>&nbsp;* <span className='bolder'>@experience</span> Svelte</span>
              <span className='comment multi'>&nbsp;* <span className='bolder'>@experience</span> PHP (OOP, Laravel)</span>
              <span className='comment multi'>&nbsp;* <span className='bolder'>@experience</span> Websocket, Socket.IO</span>
              <span className='comment multi'>&nbsp;*</span>
              <span className='comment multi'>&nbsp;* <span className='bolder'>@link</span>&nbsp;<span className='link' onClick={ () => window.open('https://github.com/ferencak', '_blank') }>And little bit more...</span> 👈{ GetRandomEmoji() }</span>  
              <span className='comment multi'>*/</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

}