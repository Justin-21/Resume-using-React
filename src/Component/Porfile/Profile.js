import { Typography } from '@material-ui/core'
import React from 'react'
import './Profile.css'
import IMG from '../../assets/images/displayImage.jpg'
import CustomTimeline, { CustomtimelineSeparator } from '../Timeline/TImeline'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import TimelineContent from '@material-ui/lab/TimelineContent'
import ResumeData from '../../utils/ResumeData'
import TimelineItem from '@material-ui/lab/TimelineItem'
import CustomButton from '../Button/Button'
import GetAppIcon from '@material-ui/icons/GetApp'

// Custom TImeline Item's
const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomtimelineSeparator />
    <TimelineContent className='timeline_content'>
      {link ? (
        <Typography className='timelineItem_text'>
          <span>{title}:</span>{' '}
          <a href={link} target='_blank' rel='noreferrer'>
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className='timelineItem_text'>
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
)

// Main Function

function Profile() {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{ResumeData.name} </Typography>
        <Typography className='title'> {ResumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={IMG} alt='' />
      </figure>
      <div className='profile_information '>
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title='Name' text={ResumeData.name} />
          <CustomTimelineItem title='Email' text={ResumeData.email} />
          <CustomTimelineItem title='Contact' text={ResumeData.contact} />
          <CustomTimelineItem title='Birthday' text={ResumeData.birthday} />
          {Object.keys(ResumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={ResumeData.socials[key].text}
              link={ResumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className='button_container'>
          <CustomButton text={'Download CV'} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  )
}

export default Profile
