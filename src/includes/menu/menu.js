import React from 'react'
import $ from 'jquery'

export default class Menu extends React.Component {

  constructor(props) {
    super(props)

    $('html, body').animate({
      scrollTop: $('body').offset().top
    }, 1000)

    this.state = {
      activeSection: 'home'
    }
  }

  scroll(section) {
    this.setState({
      activeSection: section.split('#')[1]
    })
    $('html, body').animate({
      scrollTop: $(section.toString()).offset().top
    }, 1000)
  }

  render() {
    return (
      <div className='to-right'>
        <div className='items'>
          <p className={`item ${this.state.activeSection === 'home' ? 'active' : ''}`} onClick={ () => this.scroll('#home') }>
            .home({ this.state.activeSection === 'home' ? 'true' : '' })
          </p>
          <p className={`item ${this.state.activeSection === 'about' ? 'active' : ''}`} onClick={ () => this.scroll('#about') }>
            .about({ this.state.activeSection === 'about' ? 'true' : '' })
          </p>
          <p className={`item ${this.state.activeSection === 'work' ? 'active' : ''}`} onClick={ () => this.scroll('#work') }>
            .work({ this.state.activeSection === 'work' ? 'true' : '' })
          </p>
          <p className={`item ${this.state.activeSection === 'contact' ? 'active' : ''}`} onClick={ () => this.scroll('#contact') }>
            .contact({ this.state.activeSection === 'contact' ? 'true' : '' })
          </p>
        </div>
      </div>
    )
  }

}