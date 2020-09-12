import React from 'react'

import { Helmet } from 'react-helmet'
import { ThemeProvider, createMuiTheme, CssBaseline, Typography } from '@material-ui/core'
import { ConfirmProvider } from 'material-ui-confirm'

import Family from 'components/Family'

const theme = createMuiTheme()
const App = () => {
  return (
    <div className='App'>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ConfirmProvider>
          <div style={{ marginTop: 16 }}>
            <Typography
              variant='h5'
              gutterBottom
              style={{ textAlign: 'center' }}
            >
              Do Family
            </Typography>
            <Family data={data} />
          </div>
        </ConfirmProvider>
      </ThemeProvider>
    </div>
  )
}

export default App

const data = {
  displayName: 'Yuki Yami',
  spouse: {
    displayName: 'Miku Hatsune',
    photoURL: 'https://avatarfiles.alphacoders.com/107/thumb-107489.jpg',
    description: `Hatsune Miku, sometimes called Miku Hatsune, is a Vocaloid software voicebank developed by Crypton Future Media and its official moe anthropomorph, a teenage girl with long, turquoise twintails. She uses Yamaha Corporation's Vocaloid 2, Vocaloid 3, and Vocaloid 4 singing synthesizing technologies.`
  },
  children: [
    {
      displayName: 'Mimi',
      photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9uphHgEYfAMnwCtOCtadyFD8VTyiyorYVi_aN5OymelT85Q3bujNVTDVcr93wLtlxHRGh6Pllu3zSCilUOzkjQrLN5x8RJ1T-fg&usqp=CAU&ec=45699844',
      spouse: {
        displayName: 'Yato'
      },
      children: [
        {
          displayName: 'Hattie',
        },
      ]
    },
    {
      displayName: 'Hattie',
    },
    {
      displayName: 'Hattie',
    },
    
  ]
}
