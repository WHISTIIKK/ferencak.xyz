/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

export default class ContactSection extends React.Component {

  render() {
    return (
      <section id="contact">
        <div className='to-left contact'>
          <div className='inner about'>
            <span className='comment single'>// Want to contact me?</span>
            <p>Contact me</p>
            <div className='info'>
              <span className='comment multi'>/**</span>
              <span className='comment multi'>&nbsp;* If you want to, you can contact me 🤗</span>
              <span className='comment multi'>&nbsp;* </span>
              <span className='comment multi'>&nbsp;* <span className='bolder'>@mail</span>&nbsp;nikolas.ferencak@gmail.com</span>
              <span className='comment multi'>&nbsp;* <span className='bolder'>@facebook</span>&nbsp;<span className='link' onClick={ () => window.open('https://www.facebook.com/Whistik/', '_blank') }>Nikolas Ferenčák</span></span>
              <span className='comment multi'>*/</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

}