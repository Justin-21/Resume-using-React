import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {
  HomeRounded,
  Telegram,
} from '@material-ui/icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink, withRouter } from 'react-router-dom'
import ResumeData from '../../utils/ResumeData'
import CustomButton from '../Button/Button'
import './header.css'

const Header = (props) => {
  const pathName = props?.history?.location?.pathname
  return (
    <Navbar expand='lg' sticky='top' className='Header'>
      {/* Adding NavLink  */}

      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='Header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left'>
          {/* Resume Link  */}
          <Nav.Link
            as={NavLink}
            to='/'
            className={pathName === '/' ? 'header_active_link' : 'header_link'}
          >
            Resume
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={
              pathName === '/portfolio' ? 'header_active_link' : 'header_link'
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className='header_right'>
          {Object.keys(ResumeData.socials).map((key) => (
            <a
              href={ResumeData.socials[key].link}
              target='_blank'
              rel='noreferrer'
            >
              {ResumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text='Hire Me' icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header)
