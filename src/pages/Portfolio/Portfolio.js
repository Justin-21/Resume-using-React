import React, { useState } from 'react'
import './Portfolio.css'
import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core'
import ResumeData from '../../utils/ResumeData'

function Portfolio() {
  const [tabValue, setTabValue] = useState('All')
  const [projectDialog, setProjectDialog] = useState(false)

  return (
    <Grid container spacing={1} className='section pb_45 pt_45'>
      {/* Title */}

      <Grid item className='section_title mb_20'>
        <span></span>
        <h6 className='aboutme'>Portfolio</h6>
      </Grid>

      {/* Tabs */}

      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor='white'
          className='Customtab'
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label='All'
            value='All'
            className={
              tabValue === 'All' ? 'Customtab_item active' : 'Customtab_item'
            }
          />

          {[...new Set(ResumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === tag ? 'Customtab_item active' : 'Customtab_item'
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* Projects */}

      <Grid item xs={12}>
        <Grid container spacing={3}>
          {ResumeData.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === 'All' ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className='customCard'
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className='customCard_image'
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant='body2'
                            className='customCard_title'
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant='caption'
                            className='customCard_caption'
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className='projectDialog'
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src={projectDialog.image} alt='' className='projectDialog_image' />
        <DialogContent>
          <Typography className='projectDialog_discription'>
            {projectDialog.Discription}
          </Typography>
        </DialogContent>
        <DialogActions className='projectDialog_actions'>
          {projectDialog?.links?.map((link) => (
            <a
              href={link.link}
              target='_blank'
              className='projectDialog_icon'
              rel='noreferrer'
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default Portfolio
