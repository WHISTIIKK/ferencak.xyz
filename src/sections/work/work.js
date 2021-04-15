/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './style.css'
export default class WorkSection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          name: 'Chilluju.tv',
          link: 'https://github.com/ferencak/chilluju-client',
          tags: ['Angular', 'JWT', 'Socket.io', '+ B/E']
        },
        {
          name: 'Hornet AIO', 
          link: 'https://github.com/ferencak/hornet',
          tags: ['Angular', 'JWT', 'Socket.io', '+ B/E']
        },
        {
          name: 'MAG AIO', 
          link: 'https://github.com/ferencak/magaio',
          tags: ['React', 'Socket.io', '+ B/E']
        },
        {
          name: 'Kinai', 
          link: 'https://github.com/ferencak/kinai',
          tags: ['React', 'Socket.io', '+ B/E']
        },
        {
          name: 'Lan-Host.net', 
          link: 'https://github.com/ferencak/lan-host.net',
          tags: ['2FA', 'PHP', 'Laravel', 'Server Management']
        },
        {
          name: 'This Portfolio', 
          link: 'https://github.com/ferencak/ferencak.xyz',
          tags: ['React']
        },
      ]
    }
  }

  open(link) {
    console.log(link)
    window.open(link, '_blank');
  }

  render() {
    return (
      <section id="work">
        <div className='to-left work'>
          <div className='inner about'>
            <span className='comment single'>// And what about my projects?</span>
            <p>My Works</p>
            <div className='info'>
              <span className='comment multi'>/**</span>
              <span className='comment multi'>&nbsp;* Here you can find some of my projects.</span>
              <span className='comment multi'>&nbsp;* Or you can check my GitHub for others.</span>
              <span className='comment multi'>*/</span>
              <div className='my-works'>
                {this.state.projects.map((project, i) => { 
                  return (
                    <div key={ i } className='item' onClick={ () => this.open(project.link) }>
                      <p className='title'>{ project.name }</p>
                      <div className='tags'>
                        {project.tags.map((tag, i) => { 
                          return (
                            <span key={ i }>{ tag }</span>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

}
