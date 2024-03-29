import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';

import { Box, Button, Collapsible, Heading, Grommet, ResponsiveContext } from 'grommet'
import { Notification } from 'grommet-icons'
const theme = {
  global: {
    colors: {
      brand: '#228BE6',
      noxcolor: '#A8001C'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
}
const AppBar = props => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='noxcolor'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
)

class App extends Component {
  state = {
    showSidebar: false
  }
  render () {
    const { showSidebar } = this.state
    return (
      <Grommet theme={theme} full>
        <Box fill>
          <AppBar>
            <Heading level='3' margin='none'>
              My App
            </Heading>
            <Button
              icon={<Notification />}
              onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
            />
          </AppBar>
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
            <Box flex align='center' justify='center'>
              app body
            </Box>
            {/* <Box width='medium' background='light-2' elevation='small' align='center' justify='center'>
              sidebar
            </Box> */}

            <Collapsible direction='horizontal' open={showSidebar}>
              <Box flex width='medium' background='light-2' elevation='small' align='center' justify='center'>
                sidebar
              </Box>
            </Collapsible>
          </Box>
        </Box>
      </Grommet>
    )
  }
}

export default App
