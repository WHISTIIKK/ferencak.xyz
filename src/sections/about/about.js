/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './style.css'

export default class AboutSection extends React.Component {

  render() {
    return (
      <section id="about">
        <div className='to-left about'>
          <div className='inner about'>
            <span className='comment single'>// Do you want some info about me?</span>
            <p>About me</p>
            <div className='info'>
              <span className='comment multi'>/**</span>
              <span className='comment multi'>&nbsp;* So...</span>
              <span className='comment multi'>&nbsp;* I think, I'm very interesting person.</span>
              <span className='comment multi'>&nbsp;* </span>
              <span className='comment multi'>&nbsp;* I live in Czech Republic, near to Brno.</span>
              <span className='comment multi'>&nbsp;* I was born in Slovakia, in 1999 so I'm 21 years old.</span>
              <span className='comment multi'>&nbsp;* </span>
              <span className='comment multi'>&nbsp;* My whole life is programming and cars.</span>
              <span className='comment multi'>&nbsp;* I've never studied IT. I was interested in</span>
              <span className='comment multi'>&nbsp;* game development and I realized</span>
              <span className='comment multi'>&nbsp;* I love doing websites.</span>
              <span className='comment multi'>&nbsp;* </span>
              <span className='comment multi'>&nbsp;* I've some experiences in Frontend & Backend.</span>
              <span className='comment multi'>&nbsp;* But don't forget - humans are still learning :)</span>
              <span className='comment multi'>&nbsp;* </span>
              <span className='comment multi'>&nbsp;* I really love when I take my car out and I'm enjoying my ride.</span>
              <span className='comment multi'>&nbsp;* I own Golf IV, 1.9 TDI-PD (96kw base).</span>
              <span className='comment multi'>&nbsp;* </span>
              <span className='comment multi'>&nbsp;* And my dreams?</span> 
              <span className='comment multi'>&nbsp;* 1. Work for cool company with really cool peoples 🤜🤛</span>
              <span className='comment multi'>&nbsp;* 2. Golf III GTI 2.0 16v 😍</span>
              <span className='comment multi'>&nbsp;* </span>
              <span className='comment multi'>&nbsp;* So.. Thats all! Just <span className='link'>contact</span> me for more informations!</span>  
              <span className='comment multi'>*/</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

}