import React from 'react'
import './Footer.css'
import { Typography } from '@material-ui/core'
import ResumeData from '../../utils/ResumeData'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_right'>
        <Typography className='footer_name'>{ResumeData.name}</Typography>
      </div>
      <div className='footer_left'>
        <Typography className='footer_copyright'>
          Designed And Developed By{' '}
          <a
            href='https://www.instagram.com/thestylingtrack/'
            target='_blank'
            rel='noreferrer'
          >
            Harshit Tripathi
          </a>
          <br />
          Clone Idea From{' '}
          <a href='https://thetav.online/html/mat/default/index.html#'>
            Tavonline
          </a>
        </Typography>
      </div>
    </div>
  )
}

export default Footer
