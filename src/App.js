import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Profile from './Component/Porfile/Profile'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'
import { Container, Grid } from '@material-ui/core'

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          {/* Adding Browser Router  */}

          <Router>
            <Header />
            <div className='main_content container_shadow'>
              <Switch>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>
                <Route path='/'>
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>

          {/* Footer */}

          <Footer />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
