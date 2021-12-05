import React from 'react'
import './Resume.css'
import { Grid, Icon, Paper, TextField, Typography } from '@material-ui/core'

import ResumeData from '../../utils/ResumeData'

import CustomTimeline, {
  CustomtimelineSeparator,
} from '../../Component/Timeline/TImeline'

import WorkIcon from '@material-ui/icons/Work'

import RResume from '../../utils/ResumeData'

import { TimelineContent, TimelineDot, TimelineItem } from '@material-ui/lab'

import SchoolIcon from '@material-ui/icons/School'

import CustomButton from '../../Component/Button/Button'

function Resume() {
  return (
    <>
      {/* About me Section */}

      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='aboutme'>About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' className='aboutme_text'>
            {ResumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and Experience */}

      <Grid container className='section pb_45'>
        <Grid item className='section_title mt_30 mb_30'>
          <span></span>
          <h6 className='aboutme '>Resume</h6>
        </Grid>

        {/* Experience */}

        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* Education  */}

            <Grid item sm={12} md={6}>
              <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                {RResume.experience.map((experiences) => (
                  <TimelineItem>
                    <CustomtimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>
                        {experiences.title}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {experiences.date}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='timeline_discription'
                      >
                        {experiences.Discription}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* Education  */}

            <Grid item sm={12} md={6}>
              <CustomTimeline title='Education' icon={<SchoolIcon />}>
                {RResume.Education.map((experiences) => (
                  <TimelineItem>
                    <CustomtimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>
                        {experiences.title}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {experiences.date}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='timeline_discription'
                      >
                        {experiences.Discription}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}

      <Grid container className='section pb_45'>
        <Grid item className='section_title mt_30 mb_30'>
          <span></span>
          <h6 className='aboutme '>My Services </h6>
        </Grid>

        {/* Mapping the Data from the Resume Data  */}

        <Grid item xs={12}>
          <Grid container spacing={3} justify={'space-around'}>
            {RResume.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='service'>
                  <Icon className='service_icon'>{service.icon}</Icon>
                  <Typography className='service_title' variant='h6'>
                    {service.title}
                  </Typography>
                  <Typography className='service_discription' variant='body2'>
                    {service.Discription}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid
        container
        className='section pb_45 mt_30 mb_30 p_50'
        spacing={3}
        justify='space-between'
      >
        {RResume.skills.map((skill) => (
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={0} className='skill'>
              <Typography className='skills_title' variant='h6'>
                {skill.title}
              </Typography>
              {skill.Discription.map((discription) => (
                <Typography className='skill_discription' variant='body2'>
                  <TimelineDot variant='outlined' className='skill_dot' />
                  {discription}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Contact Section */}
      <Grid container spacing={6} className='section pt_45 pb_45'>
        {/* Contact Section */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className='section_title mt_30 mb_30'>
              <span></span>
              <h6 className='aboutme '>Contact Form</h6>
            </Grid>

            <Grid item xs={12}>
              {/* Container for the Contact forn inside the contact form container */}

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='name' label='Name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='email' label='Email' />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name='message'
                    label='Message'
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text='Submit' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Information Section */}

        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className='section_title mt_30 mb_30'>
              <span></span>
              <h6 className='aboutme '>Contact Information </h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography className='contactinfo-item'>
                    <span>Address: </span>
                    {RResume.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactinfo-item'>
                    <span>Phone No: </span>
                    {RResume.contact}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactinfo-item'>
                    <span>Email: </span>
                    {RResume.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
           
           
            <Grid item xs={12}>
              <Grid container className='contactinfo_socialsContainer'>
                {Object.keys(RResume.socials).map((key) => (
                  <Grid item className='contactinfo_social'>
                    <a href={RResume.socials[key].link}>
                      {RResume.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Resume
