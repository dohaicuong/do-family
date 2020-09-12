import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'
import { ConfirmProvider } from 'material-ui-confirm'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const theme = createMuiTheme()
export const decorators = [
  (Story) => (
    <>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ConfirmProvider>
          <Story/>
        </ConfirmProvider>
      </ThemeProvider>
    </>
  )
]
