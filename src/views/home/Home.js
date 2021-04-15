/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import { HomeSection, AboutSection, WorkSection, ContactSection, Menu } from '../../imports'

export default class Home extends React.Component {

  render () {
    return (
      <React.Fragment>
        <p className='logo'>Nikolas.</p>
        <HomeSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
        <Menu />
        <p className="menu-link" onClick= { () => window.open('https://github.com/ferencak', '_blank') }>Check my GitHub</p>
      </React.Fragment>
    )
  }

}

